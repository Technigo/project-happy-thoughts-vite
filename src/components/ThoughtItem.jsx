// Component for specific messages posted in the ThoughtList

import React from 'react';
import "./ThoughtItem.css";

const ThoughtItem = ({ thought, setThoughts }) => {
  const handleLike = () => {
    fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thought._id}/like`, {
      method: 'POST',
    })
      .then((res) => res.json())
      .then((updatedThought) => {
        setThoughts((prevThoughts) =>
          prevThoughts.map((t) => (t._id === updatedThought._id ? updatedThought : t))
        );
      });
  };

    // Helper function to calculate the time difference
    const getTimeAgo = (createdAt) => {
      const now = new Date();
      const createdTime = new Date(createdAt);
      const diffInMs = now - createdTime;
  
      const seconds = Math.floor(diffInMs / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);
  
      if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
      if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
      if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
      return `${seconds} second${seconds !== 1 ? 's' : ''} ago`;
    };

  return (
    <div className="thought-card">
      <div className="thought-message">
      <p>{thought.message}</p>
      </div>
      <div className="thought-footer">

        {/* Make the heart clickable and use handleLike */}
        <div className="heart-section" onClick={handleLike}>
        <button className={`heart-icon ${thought.hearts > 0 ? 'liked' : ''}`}>
            ❤️
          </button>
        <span className="heart-count"> x {thought.hearts}</span>
      </div>
              {/* Display time ago in the bottom right */}
              <div className="time-stamp">
          <span>{getTimeAgo(thought.createdAt)}</span>
        </div>
      </div>
    </div>
  );
};

export default ThoughtItem;