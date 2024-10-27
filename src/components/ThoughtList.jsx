// ThoughtList.jsx
import React from "react";
import ThoughtItem from "./ThoughtItem";
import './styleForm.css';  // Add styles for your form

const ThoughtList = ({ thoughts, onLike }) => {
  return (
    <div>
      {thoughts.map((thought) => (
        <ThoughtItem key={thought._id} thought={thought} onLike={onLike} />
      ))}
    </div>
  );
};

export default ThoughtList;
