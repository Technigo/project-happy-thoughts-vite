import React, { useState, useEffect } from 'react';
import { likeThought } from "./apiService";

export const SingleThought = ({ thought, onLike }) => {
  const [isLiking, setIsLiking] = useState(false);
  const [numLikes, setNumLikes] = useState(thought.hearts);

  const handleLikeClick = async () => {
    if (!isLiking) {
      setIsLiking(true);
      try {
        const updatedThought = await likeThought(thought);
        setIsLiking(false);
        setNumLikes(updatedThought.hearts);
      } catch (error) {
        console.error('Error liking thought:', error);
      setIsLiking(false);
    }
   }
  };
    return (
    <div className="thought-item">
        {thought.message}
        <button onClick={handleLikeClick} disabled={isLiking} title={thought.message}>
        ❤️
        </button>
        <span>x {numLikes}</span>
    </div>
  );
};


export default SingleThought;