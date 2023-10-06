/* eslint-disable react/prop-types */
import { LikeButton } from "./LikeButton";

export const Thoughts = ({ thoughts, onLike }) => {
  return (
    <div>
      {thoughts.map((thought) => (
        <div key={thought._id} className="thought-box">
          <p className="thought-text">{thought.message}</p>
          <LikeButton
            id={thought._id}
            hearts={thought.hearts}
            onLike={onLike} // Adjust this line
          />
          {/* <TimePassed timestamp={thought.createdAt} /> */}
        </div>
      ))}
    </div>
  );
};
