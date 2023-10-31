import React from "react";

const LikeThought = ({ thoughtId, handleLikeThought }) => {
  const handleLike = () => {
    handleLikeThought(thoughtId);
  };

  return (
    <button onClick={handleLike}>❤️ Like</button>
  );
};

export default LikeThought;
