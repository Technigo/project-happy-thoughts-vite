import PropTypes from "prop-types";
import { formatDistance } from "date-fns";

const ThoughtsList = ({ thoughts }) => {
  return (
    <section className="thoughts-list">
      <p>This is all of the thoughts</p>
      {thoughts.map((thought) => (
        <div key={thought._id} className="thought">
          <h3 className="thought-text">{thought.message}</h3>
          <div className="thought-bottom-container">
            <span className="likes">
              <button className="like-button">❤️</button> x {}
            </span>
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
  setThoughts: PropTypes.array.isRequired,
};
