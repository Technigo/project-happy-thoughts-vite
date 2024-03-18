import PropTypes from "prop-types";

const ThoughtCard = ({ message, likes, time }) => {
  return (
    <div>
      <p>{message}</p>
      <p>♥️{likes}</p>
      <p>{time}</p>
    </div>
  );
};

export default ThoughtCard;

ThoughtCard.propTypes = {
  message: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  time: PropTypes.string.isRequired,
};
