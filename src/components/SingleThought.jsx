/* eslint-disable react/prop-types */
import { formatDistanceToNow } from "date-fns";

export const SingleThought = ({ thought, onLike }) => {
  return (
    <div className="thought">
      <p>{thought.message}</p>
      <div className="thought-footer">
        <button className="heart-button" onClick={() => onLike(thought._id)}>
          <span role="img" aria-label="heart">
            ❤️
          </span>{" "}
          x {thought.hearts}
        </button>
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
