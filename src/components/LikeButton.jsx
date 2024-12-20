// LikeButton.jsx 

import { useState } from 'react'; 

export const LikeButton = ({ thoughtId, initialHearts }) => {
    // State to track if like action is in progress
    const [isLiking, setIsLiking] = useState(false);
    // State to track number of likes
    const [hearts, setHearts] = useState(initialHearts);
  
    // Handler for when like button is clicked
    const handleLike = () => {
      if (isLiking) return; // Prevent multiple clicks
      
      setIsLiking(true);
      // Send POST request to like the thought
      fetch(`https://happy-thoughts-api-hvg8.onrender.com/thoughts/${thoughtId}/like`, {
        method: 'POST'
      })
        .then(res => res.json())
        .then(updatedThought => {
          setHearts(updatedThought.hearts); // Update like count
          setIsLiking(false); // Enable button again
        });
    };
  
    return (
      <div className="like-container">
        <button 
          onClick={handleLike}
          className={`heart-button ${isLiking ? 'liking' : ''}`}
          disabled={isLiking}
        >
          ❤️
        </button>
        <span className="heart-count">
          x {hearts}
        </span>
      </div>
    );
};