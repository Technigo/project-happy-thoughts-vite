import PropTypes from 'prop-types'; // Import PropTypes


const ThoughtsList = ({ thoughts }) => {
  return (
    <div>
      <h2>Recent Happy Thoughts</h2>
      <ul>
        {thoughts.map((thought) => (
          <li key={thought._id}>
            <p>{thought.message}</p>
            <p><strong>❤️ {thought.hearts}</strong></p>
            <p><small>Posted at: {new Date(thought.createdAt).toLocaleString()}</small></p>
          </li>
        ))}
      </ul>
    </div>
  );
};

ThoughtsList.propTypes = {
  thoughts: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
      hearts: PropTypes.number.isRequired,
      createdAt: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ThoughtsList;
