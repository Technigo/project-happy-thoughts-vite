import { LikeButton } from "./LikeButton";
import PropTypes from "prop-types";
import "./ThoughtBox.css";

export const ThoughtBox = ({ thoughts, setThoughts }) => {
  return (
    <ul>
      {thoughts.map((thought) => (
        <li className="thought" key={thought._id}>
          <div className="thought-message">{thought.message}</div>
          <div className="thought-like">
            <LikeButton thought={thought} setThoughts={setThoughts} /> x{" "}
            {thought.hearts}
          </div>
        </li>
      ))}
    </ul>
  );
};

ThoughtBox.propTypes = {
  setThoughts: PropTypes.any,
  thoughts: PropTypes.any,
};
