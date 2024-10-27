import { useState, useEffect } from 'react';

// Function to calculate time difference
const timeAgo = (createdAt) => {
  const now = new Date();
  const createdTime = new Date(createdAt);
  const timeDiff = now - createdTime;

  const seconds = Math.floor(timeDiff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    return `${days} day${days > 1 ? 's' : ''} ago`;
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  } else {
    return `${seconds} second${seconds > 1 ? 's' : ''} ago`;
  }
};

export const HappyThought = ({ thought, onLike }) => {

  const [timeSincePosted, setTimeSincePosted] = useState(timeAgo(thought.createdAt));

  // Update time difference
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeSincePosted(timeAgo(thought.createdAt));
    }, 60000); //Update every 60 seconds
    return () => clearInterval(interval);
  }, [thought.createdAt]);

  return (
    <div className="happy-thought">
      <p>{thought.message}</p>
      <div className="thought-actions">
        <button
          className={`heart-button`} // Change color if liked
          onClick={() => onLike(thought._id)}
        >🩷</button>
        <span className="likes-count">x {thought.hearts}</span>
        <span className="time-posted">{timeSincePosted}</span>
      </div>
    </div>
  );
};


