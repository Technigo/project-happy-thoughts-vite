import { Likes } from "./Likes.jsx";
import { Time } from "./Time.jsx";

export const Thoughts = ({ id, message, likes, time }) => {
  return (
    <div className="box">
      <p className="message">{message}</p>
      <div className="message-details">
        <Likes likes={likes} id={id} />
        <Time time={time} />
      </div>
    </div>
  );
};
