/* eslint-disable react/prop-types */
import moment from "moment"; // Import Moment.js
import "./Message.css";

export const Message = ({ thoughts, onLike }) => {
  // Function to handle the "like" button click
  const handleLikeClick = (thoughtId) => {
    fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thoughtId}/like`, {
      method: "POST"
    })
      .then((response) => response.json())
      .then(() => {

        console.log("Click", thoughtId); // Display a message in the console after clicking
        onLike(thoughtId); // Update the state with the new number of likes
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

  return (
    <div className="message-wrapper">
      {thoughts.map((thought) => (
        <div key={thought._id}className="message" >
          <p className="paragraph">{thought.message}</p>
          <div className="likes-wrapper">
            <div className="button-wrapper">
            <button
              type="button"
              id="likeBtn"
              className="like-button"
              onClick={() => {
                handleLikeClick(thought._id);
              }}
            >
              <span aria-label="like button">❤️</span>
            </button>
              <p>x{thought.hearts}</p>
              </div>
            <div className="info-time">{moment(thought.createdAt).fromNow()}</div> {/* Display the time since the thought was created */}
          </div>
        </div>
      ))}
    </div>
  );
};
