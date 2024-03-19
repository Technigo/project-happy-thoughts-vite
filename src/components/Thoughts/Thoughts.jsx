import PropTypes from "prop-types";
import { Likes } from "./Likes"

export const Thoughts = ({ message, likes, time }) => {
  return (
    <div className="thought-box">
      <p className="message">{message}</p>
      <div className="beneath-message">
        <Likes likes={likes}/>
        <p>{time}</p>
      </div>   
    </div>
    );
};

Thoughts.propTypes = {
  message: PropTypes.string.isRequired,
  likes: PropTypes.number,
  time: PropTypes.string,
};
