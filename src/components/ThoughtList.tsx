import React from 'react';
import './ThoughtList.css';
import { ThoughtItem } from "./ThoughtItem";

interface Thought {
  _id: string;
  message: string;
  hearts: number;
  createdAt: string;
}

interface ThoughtListProps {
  thoughts: Thought[];
  onLike: (id: string) => void;
  likedThoughts: string[];
}

export const ThoughtList: React.FC<ThoughtListProps> = ({ thoughts, onLike, likedThoughts }) => (
  <div className="thought-list">
    {thoughts.map((thought) => (
      <ThoughtItem
        key={thought._id}
        thought={thought}
        isLiked={likedThoughts.includes(thought._id)}
        onLike={onLike}
      />
    ))}
  </div>
);
