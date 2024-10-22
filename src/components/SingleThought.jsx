/* eslint-disable react/prop-types */
import { formatDistanceToNow } from "date-fns";

export const SingleThought = ({ thought, onLike }) => {
  return (
    <div className="thought">
      <p>{thought.message}</p>
      <div className="thought-footer">
        {/* Separate the heart button and likes count */}
        <button className="heart-button" onClick={() => onLike(thought._id)}>
          <span role="img" aria-label="heart">
            ❤️
          </span>
        </button>
        <span className="likes-count">x {thought.hearts}</span>
        {/* Use relative time for better readability */}
        <p>
          {formatDistanceToNow(new Date(thought.createdAt), {
            addSuffix: true,
          })}
        </p>
      </div>
    </div>
  );
};
