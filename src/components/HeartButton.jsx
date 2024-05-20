import { useState } from "react";
import { PropTypes } from "prop-types";
import "./HeartButton.css";

const HeartButton = ({ hearts, thoughtId, handleHeartClick }) => {
  const [addedHearts, setAddedHearts] = useState(0);
  const click = () => {
    handleHeartClick(thoughtId);
    setAddedHearts((previousHearts) => previousHearts + 1);
  };
  return (
    <span className="heart">
      <button
        className={`heart-button${addedHearts === 0 ? "" : " liked"}`}
        onClick={click}
      >
        ❤️
      </button>{" "}
      x {hearts + addedHearts}
    </span>
  );
};

export default HeartButton;

HeartButton.propTypes = {
  hearts: PropTypes.number.isRequired,
  handleHeartClick: PropTypes.func.isRequired,
  thoughtId: PropTypes.string.isRequired,
};
