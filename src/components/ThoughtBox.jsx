import { LikeButton } from "./LikeButton";
import PropTypes from "prop-types";
import "./ThoughtBox.css";

export const ThoughtBox = ({ thoughts, setThoughts }) => {
  return (
    <ul>
      {thoughts.map((thought) => (
        <li className="thought" key={thought._id}>
          {thought.message}
          <br />
          <LikeButton thought={thought} setThoughts={setThoughts} />
          <br />x {thought.hearts}
        </li>
      ))}
    </ul>
  );
};

ThoughtBox.propTypes = {
  setThoughts: PropTypes.any,
  thoughts: PropTypes.any,
};
