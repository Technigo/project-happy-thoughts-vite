import React from "react";

const LikeThought = ({ thoughtId, handleLikeThought }) => {
  const handleLike = () => {
    handleLikeThought(thoughtId);
  };

  return (
    <button className="like-button" onClick={() => handleLikeThought(thoughtId)}>
       <span className="heart-icon">❤️</span>
    </button>        

  );
};

export default LikeThought;
