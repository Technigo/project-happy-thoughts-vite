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
      </div>
    </div>
  );
};

export default ThoughtItem;