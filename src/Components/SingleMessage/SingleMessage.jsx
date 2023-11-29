import { useState } from "react";
import moment from "moment";

// Declaring the functional component `SingleMessage` that takes `message` and `fetchPosts` as prop
export const SingleMessage = ({ message, fetchPosts }) => {
  // Declaring state `numLikes` and its updater function `setNumLikes`, updating it with the state `message.hearts` (number of likes). Basically it allows the functional component to have state, which means it can maintain and update data over time. NumLikes is the curent state value.
  const [numLikes, setNumLikes] = useState(message.hearts);
  // Declaring state `liked` and its updater function `setLiked`, updating it with the state `message.liked`.
  const [liked, setLiked] = useState(message.liked);
  // console.log(message);

  //
  const onLikeIncrease = async () => {
    try {
      // Step 1: sending a POST request to like a message. The `await` keyword is used to wait for the response before moving ti the next step
      const response = await fetch(
        `https://happy-thoughts-api-k50a.onrender.com/thoughts/${message._id}/like`,
        {
          method: "POST",
        }
      );
      // Step 2: Extracting JSON content from the response. `response.json()` is an asynchronous method that parses the response body as JSON
      const result = await response.json();
      // Step 3: Updating the state of `numLikes`
      setNumLikes(result.hearts);
      // Step 4: Setting the `liked`state to true
      setLiked(true);
      // step 5: Refreshing the list of messages, assuming fetchPosts is a function to refresh the message list
      fetchPosts();
    } catch (error) {
      console.error("Error liking message:", error);
      // Step 6: Handlig errors, if any. This block of code runs if there is an error in the `try` block.
    }
  };

  return (
    <div className="message">
      {/* Render the message content */}
      <p>{message.message}</p>
      <div className="info-wrapper">
        <div className="info-like">
          {/* Like button */}
          <button
            type="submit"
            aria-label="button for liking a post" // The aria-label attribute is used to provide a text alternative to the element that has no visible text on the screen to make it more accessable
            className="like-btn"
            onClick={onLikeIncrease}
            // changing the background color when a post is liked
            style={{ backgroundColor: liked ? "#ffb7d2" : "" }}
          >
            <span className="emoji" aria-label="like button">
              ❤️
            </span>
          </button>
          {/* Like counter */}
          <span className="num-likes"> x {numLikes}</span>
        </div>
        {/* Timestamp. Uses the moment.js library to format the timestamp in a human-readable format */}
        <p className="time-stamp"> {moment(message.createdAt).fromNow()}</p>
      </div>
    </div>
  );
};
