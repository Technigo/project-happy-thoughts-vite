import React from "react";
import { formatDistanceToNow } from "date-fns";

// Define the type for a single thought
interface Thought {
  _id: string;
  message: string;
  hearts: number;
  createdAt: string; // Assuming this is an ISO date string
}

// Define the props for the ThoughtItem component
interface ThoughtItemProps {
  thought: Thought;
  onLike: (id: string) => void;
}

const ThoughtItem: React.FC<ThoughtItemProps> = ({ thought, onLike }) => {
  return (
    <li className="thought-item">
      <p className="thought-message">{thought.message}</p>
      <div className="thought-footer">
        <div className="thought-hearts">
          <button
            className={`heart-button ${thought.hearts > 0 ? "liked" : ""}`}
            onClick={() => onLike(thought._id)}
            aria-label={`Like the thought: "${thought.message}". Currently has ${thought.hearts} likes`}
          >
            ❤️
          </button>
          <span>x {thought.hearts}</span>
        </div>
        <small className="thought-date">
          {formatDistanceToNow(new Date(thought.createdAt), { addSuffix: true })}
        </small>
      </div>
    </li>
  );
};

export default ThoughtItem;
