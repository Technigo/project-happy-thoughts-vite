// Import useState for managing the 'liked' state, moment.js for time calculations, and the CSS file for this component.
import { useState } from "react";
import moment from "moment";
import "./SingleMessage.css";

export const SingleMessage = ({
  singleMessage,
  postedThoughts,
  setPostedThoughts,
}) => {
  // State to track whether the message is liked or not
  const [liked, setLiked] = useState(false);
  console.log(postedThoughts);

  // Function to handle liking a message
  const onLikeIncrease = async () => {
    try {
      // Send a POST request to the API to like the message.
      await fetch(
        `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${singleMessage._id}/like`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Response was not ok");
          }
          // If the request is successful, update the number of likes and the liked state.
          return response.json();
        })
        .then(() => {
          // Update the 'postedThoughts' array to reflect the new like count.
          const updatedThoughts = postedThoughts.map((updateThought) => {
            if (updateThought._id === singleMessage._id) {
              updateThought.hearts += 1;
              // Set 'liked' to true as the message is now liked.
              setLiked(true);
            }
            return updateThought;
          });
          // Fetch the updated list of posts to reflect the changes
          setPostedThoughts(updatedThoughts);
        })

        .catch((error) => {
          console.error("Error while liking the message", error);
        });
    } catch (error) {
      console.error("Error in try-catch", error);
    }
  };
  return (
    <div className="single-message">
      {/* Display the message text */}
      <p>{singleMessage.message}</p>
      <div className="like-wrapper">
        <div className="button-wrapper">
          {/* Button to like the message */}
          <button
            type="submit"
            onClick={onLikeIncrease}
            className="like-button"
            style={{ backgroundColor: liked ? "#ee8bb4" : "" }}
          >
            <span className="heart-emoji" aria-label="button to like the post">
              ❤️
            </span>
          </button>
          {/* Display the number of likes */}
          <span className="num-likes">x{singleMessage.hearts}</span>
        </div>
        {/* Display the time elapsed since the message was posted using moment.js */}
        <span className="time-elapsed">
          {moment(singleMessage.createdAt).fromNow()}
        </span>
      </div>
    </div>
  );
};
