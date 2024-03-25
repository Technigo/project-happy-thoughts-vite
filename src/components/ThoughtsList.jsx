import PropTypes from "prop-types";
import { formatDistance } from "date-fns";
import HeartButton from "./HeartButton";
import "./ThoughtsList.css";

const ThoughtsList = ({ thoughts, handleHeartClick }) => {
  return (
    <section className="thoughts-list">
      {thoughts.map((thought) => (
        <div key={thought._id} className="thought">
          <p className="thought-text">{thought.message}</p>
          <div className="thought-bottom-container">
            <HeartButton
              hearts={thought.hearts}
              handleHeartClick={handleHeartClick}
              thoughtId={thought._id}
            />
            <p className="time-stamp">
              {formatDistance(new Date(thought.createdAt), new Date(), {
                addSuffix: true,
              })}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ThoughtsList;

ThoughtsList.propTypes = {
  thoughts: PropTypes.array.isRequired,
  handleHeartClick: PropTypes.func.isRequired,
};
