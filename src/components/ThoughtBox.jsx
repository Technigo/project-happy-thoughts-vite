import { formatDistance } from "date-fns";
import PropTypes from "prop-types";

import { LikeButton } from "./LikeButton";

import "./ThoughtBox.css";

export const ThoughtBox = ({ thoughts, setThoughts }) => {
  return (
    <ul>
      {thoughts.map((thought) => {
        const createdAt = new Date(thought.createdAt);

        return (
          <li className="thought" key={thought._id}>
            <p className="thought-message">{thought.message}</p>
            <div className="thought-like">
              <div>
                <LikeButton thought={thought} setThoughts={setThoughts} /> x{" "}
                {thought.hearts}
              </div>
              <p className="time">
                {formatDistance(new Date(createdAt), new Date(), {
                  addSuffix: true,
                })}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

ThoughtBox.propTypes = {
  setThoughts: PropTypes.any,
  thoughts: PropTypes.any,
};
