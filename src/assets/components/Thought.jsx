import React from "react";
import { HeartButton } from "./HeartButton";

export const Thought = ({ thought, onLike }) => {
  const handleLikeClick = () => {
    onLike(thought._id);
  };

  return (
    <div className="ThoughtItem">
      <p>{thought.message}</p>
      <HeartButton thought={thought} onLike={onLike} />
    </div>
  );
};
