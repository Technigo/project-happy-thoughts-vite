import { useState, useEffect } from "react";
import { Thought } from "../App";

interface HappyThoughtsProps {
  thought: Thought;
  onLike: (id: string) => void;
}

// Function to calculate time difference
const timeAgo = (createdAt: string): string => {
  const now = new Date();
  const createdTime = new Date(createdAt);
  const timeDiff = now.getTime() - createdTime.getTime();

  const seconds = Math.floor(timeDiff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    return `${days} day${days > 1 ? "s" : ""} ago`;
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else {
    return `${seconds} second${seconds > 1 ? "s" : ""} ago`;
  }
};

export const HappyThought = ({
  thought,
  onLike,
}: HappyThoughtsProps): JSX.Element => {
  // Track how long ago the thought was posted
  const [timeSincePosted, setTimeSincePosted] = useState<string>(
    timeAgo(thought.createdAt)
  );

  // Track whether the heart button has been clicked
  const [isClicked, setIsClicked] = useState<boolean>(false);

  // Update time difference every minute
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeSincePosted(timeAgo(thought.createdAt));
    }, 60000); // Update every 60 seconds
    return () => clearInterval(interval);
  }, [thought.createdAt]);

  const handleLikeClick = () => {
    if (!isClicked) {
      onLike(thought._id); // Trigger like functionality
      setIsClicked(true); // Set the clicked state to true to persist the clicked state
    }
  };

  return (
    <div className="happy-thought">
      <p>{thought.message}</p>
      <div className="thought-actions">
        <button
          className={`heart-button ${isClicked ? "liked" : ""}`} // Change color if liked
          onClick={handleLikeClick}
          aria-label={`Like thought: ${thought.message}`}
        >
          🩷
        </button>
        <span className="likes-count">x {thought.hearts}</span>
        <span className="time-posted">{timeSincePosted}</span>
      </div>
    </div>
  );
};
