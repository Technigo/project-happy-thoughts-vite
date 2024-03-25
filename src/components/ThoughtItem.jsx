import PropTypes from "prop-types";

const ThoughtItem = (props) => {
  return (
    <div className="thought-item">
      <p className="thought-message">{props.thought.message}</p>
      <div className="thought-actions">
        <button className="thought-like">❤️{props.thought.hearts}</button>
      </div>
    </div>
  );
};

export default ThoughtItem;

ThoughtItem.propTypes = {
  thought: PropTypes.shape({
    message: PropTypes.string.isRequired,
    hearts: PropTypes.number.isRequired,
  }),
};
