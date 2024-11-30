import React from "react";
import { formatDistanceToNow } from "date-fns";

const ThoughtItem = ({ thought, onLike }) => {
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
