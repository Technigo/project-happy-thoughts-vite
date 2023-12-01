/* eslint-disable react/prop-types */
import { LikeButton } from "./LikeButton";
import message from "./NewThoughtForm";
import moment from "moment";

export const Thoughts = ({ thoughts, onLike }) => {
  return (
    <div>
      {thoughts.map((thought) => (
        <div key={thought._id} className="thought-box">
          <p className="thought-text">{thought.message}</p>
          <LikeButton
            id={thought._id}
            hearts={thought.hearts}
            onLike={onLike}
          />
          <p className="time-stamp"> {moment(message.createdAt).fromNow()}</p>
        </div>
      ))}
    </div>
  );
};
