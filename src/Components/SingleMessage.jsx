import { useState } from "react";
import moment from "moment";

export const SingleMessage = ({ message, fetchPosts }) => {
  const [numLikes, setNumLikes] = useState(message.hearts);
  const [liked, setLiked] = useState(false); // Assuming 'liked' tracks if the current user has liked this message

  const onLikeIncrease = async () => {
    try {
      // Corrected URL structure assuming `VITE_APP_API_URL` is set in your .env file
      await fetch(`${import.meta.env.VITE_APP_API_URL}/thoughts/${message._id}/like`, {
        method: "POST",
      });
      setNumLikes(numLikes + 1); // Optimistically update likes count
      setLiked(true); // Update liked state to reflect UI changes if needed
      // Optionally call fetchPosts() if you want to refresh all messages from the server
    } catch (error) {
      console.error("Error liking message:", error);
    }
  };

  return (
    <div className="message">
      <p>{message.message}</p>
      <div className="info-wrapper">
        <div className="info-like">
          <button
            type="button" // Changed from 'submit' to 'button' since it's not submitting a form
            aria-label="button for liking a post"
            className="like-btn"
            onClick={onLikeIncrease}
            style={{ backgroundColor: liked ? "#ffb7d2" : "" }}
          >
            ❤️
          </button>
          <span className="num-likes"> x {numLikes}</span>
        </div>
        <p className="time-stamp">{moment(message.createdAt).fromNow()}</p>
      </div>
    </div>
  );
};