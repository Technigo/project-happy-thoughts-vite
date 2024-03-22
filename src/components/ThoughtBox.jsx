import { LikeButton } from "./LikeButton";
import PropTypes from "prop-types";
import "./ThoughtBox.css";

export const ThoughtBox = ({ thoughts, setThoughts }) => {
  return (
    <ul>
      {thoughts.map((thought) => {
        //Calculation how many minutes have passed since the post
        const createdAt = new Date(thought.createdAt);
        const currentTime = new Date();
        const timeDifference = Math.floor(
          (currentTime - createdAt) / (1000 * 60)
        );

        return (
          <li className="thought" key={thought._id}>
            <p className="thought-message">{thought.message}</p>
            <div className="thought-like">
              <div>
                <LikeButton thought={thought} setThoughts={setThoughts} /> x{" "}
                {thought.hearts}
              </div>
              <p className="time">{timeDifference} minutes ago</p>
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
