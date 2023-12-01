/* eslint-disable react/prop-types */
import { useState } from "react";
import { TimeAgo } from "./TimeAgo";
import "./SingleThought.css";

// Component to display a thought with likes
export const SingleThought = ({ message, fetchThoughts }) => {
  // Manage likes count and status
  const [numLikes, setNumLikes] = useState(message.hearts);
  const [isLiked, setIsLiked] = useState(false);

  // Handle increasing like count
  const onLikeIncrease = async () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      // API call to update like count on server
      const response = await fetch(
        `https://project-happy-api.onrender.com/thoughts/${message._id}/like`,
        options
      );
      if (!response.ok) {
        throw new Error("Failed to like message");
      }
      const data = await response.json();
      // Update state to reflect new like
      if (data) {
        setNumLikes((prevLikes) => prevLikes + 1);
        setIsLiked(true);

        if (typeof fetchThoughts === "function") {
          fetchThoughts();
        } else {
          console.error("fetchThoughts is not a function:", fetchThoughts);
        }
      }
    } catch (error) {
      console.error("Error liking message:", error);
    }
  };

  // Component
  return (
    <div className="single-thought">
      <p>{message.message}</p>
      {/* Container to hold like button count and time */}
      <div className="like-time-container">
        {/* Like button and count */}
        <div className="like-container">
          <button
            className={`like-button ${isLiked ? "liked" : ""}`}
            onClick={onLikeIncrease}>
            ❤️
          </button>
          <span> x{numLikes}</span>
        </div>
        {/* Display time */}
        {message.createdAt && (
          <p className="timestamp">
            <TimeAgo timestamp={message.createdAt} />
          </p>
        )}
      </div>
    </div>
  );
};
