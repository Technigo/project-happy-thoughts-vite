import PropTypes from "prop-types";
import { formatDistance } from "date-fns";
import HeartButton from "./HeartButton";

const ThoughtsList = ({ thoughts, handleHeartClick }) => {
  return (
    <section className="thoughts-list">
      {thoughts.map((thought) => (
        <div key={thought._id} className="thought">
          <h3 className="thought-text">{thought.message}</h3>
          <div className="thought-bottom-container">
            <HeartButton
              hearts={thought.hearts}
              handleHeartClick={handleHeartClick}
              thoughtId={thought._id}
            />
            <p>
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
