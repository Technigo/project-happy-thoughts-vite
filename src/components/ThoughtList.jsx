import React from "react";
import ThoughtItem from "./ThoughtItem";

const ThoughtList = ({ thoughts, onLike }) => {
  return (
    <ul>
      {thoughts.map((thought) => (
        <ThoughtItem key={thought._id} thought={thought} onLike={onLike} />
      ))}
    </ul>
  );
};

export default ThoughtList;
