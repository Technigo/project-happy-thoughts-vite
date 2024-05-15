import { useState } from "react";
import "./LikeButton.css";

export const LikeButton = ({ thoughtId, initialLikes, onLike }) => {
  const [likes, setLikes] = useState(initialLikes);

  /*This function sends a POST request to the API server to like the thought. When clicked (if successful) the like count for the thought is increased by one.*/
  const handleLikeClick = async () => {
    try {
      const response = await fetch(
        `https://project-happy-thoughts-api-qgyf.onrender.com/thoughts/${thoughtId}/like`,
        {
          method: "POST",
        }
      );
      if (!response.ok) {
        throw new Error("Failed to like the thought");
      }
      // Update the likes in the frontend after a successful like
      setLikes((prevLikes) => prevLikes + 1);
      // You might want to update the thoughts after a successful like as well
      onLike();
    } catch (error) {
      console.error("Error liking thought:", error);
    }
  };

  return (
    <div className="like-button-container">
      <button
        onClick={handleLikeClick}
        className={`like-button${likes > 0 ? " liked" : ""}`}
      >
        ❤️
      </button>
      <span className="like-counter">x {likes}</span>
    </div>
  );
};
