import PropTypes from "prop-types";

export const Hearts = (props) => {
  return (
    <div className="heart-info">
      <button className="heart-button">❤️</button>
      <p>x {props.hearts}</p>
    </div>
  );
};


Hearts.propTypes = {
  hearts: PropTypes.string,
};
