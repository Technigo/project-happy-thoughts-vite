import PropTypes from "prop-types";

const ThoughtsList = ({ thoughts, setThoughts }) => {
  return (
    <section className="thoughts-list">
      <p>This is all of the thoughts</p>
      {thoughts.map((thought) => (
        <div key={thought._id} className="thought">
          <p className="thought-text">{thought.message}</p>
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
