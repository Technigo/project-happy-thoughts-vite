import React, { useState, useEffect } from 'react';
import { likeThought } from "./apiService";

export const SingleThought = ({ thought, onLike }) => {
  const [isLiking, setIsLiking] = useState(false);

  const handleLikeClick = async () => {
    try {
    if (!isLiking) {
      setIsLiking(true);
      console.log('Sending like request for thought ID:', thought._id);
       const updatedThought = await likeThought(thought._id);
       console.log('Received response:', updatedThought);
      onLike(updatedThought); 
    }
      } catch (error) {
      console.error('Error liking thought:', error);
      } finally {
        setIsLiking(false);
      }
  };
    return (
    <div className="thought-item">
        {thought.message}
        <button onClick={handleLikeClick} disabled={isLiking} title={thought.message}>
        ❤️
        </button>
        <span>x {thought.hearts}</span>
    </div>
  );
};

export default SingleThought;