// components/LikeButton.jsx

import { useState } from 'react'; 

export const LikeButton = ({ thoughtId, initialHearts }) => {
    const [isLiking, setIsLiking] = useState(false);
    const [hearts, setHearts] = useState(initialHearts);
  
    const handleLike = () => {
      if (isLiking) return;
      
      setIsLiking(true);
      fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thoughtId}/like`, {
        method: 'POST'
      })
        .then(res => res.json())
        .then(updatedThought => {
          setHearts(updatedThought.hearts);
          setIsLiking(false);
        });
    };
  
    return (
      // Wrapper div to group button and count together
      <div className="like-container">
        <button 
          onClick={handleLike}
          className={`heart-button ${isLiking ? 'liking' : ''}`}
          disabled={isLiking}
        >
          {/* Heart emoji standalone without the count */}
          ❤️
        </button>
        {/* Separate span for displaying heart count with 'x' likes */}
        <span className="heart-count">
          x {hearts}
        </span>
      </div>
    );
  };