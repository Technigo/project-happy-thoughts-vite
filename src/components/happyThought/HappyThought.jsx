import "./happythought.css";
import { TimeAgo } from "../TimeAgo";
import { useState } from "react";

export const HappyThought = ({ thought }) => {
  const [liked, setLiked] = useState(false);
  const [totalHearts, setTotalHearts] = useState(thought.hearts);
  const justaThought = [];
  const thoughts = thought;

  for (let element of justaThought) {
    console.log(element[0]);
  }

  const handleLike = async (e) => {
    // alert("You have liked this post!");
    e.preventDefault();

    justaThought.push([thought._id, thought.createdAt]);
    if (!liked) {
      setLiked(true);
    }
    const options = {
      method: "POST", // Specifying the request method as POST
      // Setting the content type of the request to application/json
      headers: { "Content-Type": "application/json" },
    };

    await fetch(
      `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thought._id}/like`,
      options
    )
      .then((response) => response.json()) // Parsing the response as JSON
      .then((data) => {
        setTotalHearts(data.hearts);
      })
      // Logging any errors that occur during the fetch operation
      .catch((error) => console.log(error));
    console.log(justaThought);
  };

  return (
    <>
      {thoughts ? (
        <div key={thought._id} className="post-body">
          {/* <p className="post-text">My dog Mochi 🐕‍🦺</p> */}
          <p className="post-text">{thought.message}</p>
          <div className="like-and-time">
            <div className="like-data">
              <button
                onClick={handleLike}
                className="likeBtn"
                style={{ backgroundColor: !liked ? "pink" : "#ee8bb4" }}
              >
                <span className="like-heart-emoji">🧡</span>
              </button>
              <p className="total-likes">x {totalHearts}</p>
            </div>
            <p className="time-of-post">
              {<TimeAgo timestamp={thought.createdAt} />}
            </p>
          </div>
        </div>
      ) : (
        "Loading..."
      )}
    </>
  );
};
