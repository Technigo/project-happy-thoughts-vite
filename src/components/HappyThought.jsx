import { useState } from 'react';

export const HappyThought = ({ thought, onLike }) => {
  //Track whether the thought is liked by the user
  const [isLiked, setIsliked] = useState(false);

  const handleLikeClick = () => {
    if (!isLiked) {
      // If not already liked, like the thought and set it to liked
      onLike(thought._id);
      setIsliked(true);
    }
  };


  return (
    <div className="happy-thought">
      <p>{thought.message}</p>
      <button
        className={`heart-button ${isLiked ? 'liked' : ''}`} // Change color if liked
        onClick={handleLikeClick}
      >🩷</button>
      <span className="likes-count">x {thought.hearts}</span>
    </div>
  );
};
