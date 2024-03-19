import PropTypes from "prop-types";

export const Thoughts = ({ message, likes, time }) => {
  return (
    <div className="thought-box">
      <p className="message">{message}</p>
      <div className="beneath-message">
        <p>{likes}</p>
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
