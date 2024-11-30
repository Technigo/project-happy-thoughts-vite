import React from "react";
import ThoughtItem from "./ThoughtItem";

// Define the type for a single thought
interface Thought {
  _id: string;
  message: string;
  hearts: number;
  createdAt: string; // ISO date string
}

// Define the props for the ThoughtList component
interface ThoughtListProps {
  thoughts: Thought[];
  onLike: (id: string) => void;
}

const ThoughtList: React.FC<ThoughtListProps> = ({ thoughts, onLike }) => {
  return (
    <ul>
      {thoughts.map((thought) => (
        <ThoughtItem key={thought._id} thought={thought} onLike={onLike} />
      ))}
    </ul>
  );
};

export default ThoughtList;
