import PropTypes from "prop-types";
import { Likes } from "./Likes"
import { TimeStamp } from "./TimeStamp";

export const Thoughts = ({ message, likes, time }) => {
  return (
    <div className="thought-box">
      <p className="message">{message}</p>
      <div className="beneath-message">
        <Likes likes={likes}/>
        <TimeStamp time={time}/>
      </div>   
    </div>
    );
};

Thoughts.propTypes = {
  message: PropTypes.string.isRequired,
  likes: PropTypes.number,
  time: PropTypes.string,
};
