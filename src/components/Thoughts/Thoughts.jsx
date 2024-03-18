import PropTypes from "prop-types";

export const Thoughts = ({ message, likes, time }) => {
  return (
    <div className="thought-box">
        Thoughts: {message} {likes} {time}
    </div>
    );
};

Thoughts.propTypes = {
  message: PropTypes.string.isRequired,
  likes: PropTypes.number,
  time: PropTypes.string,
};
