// ThoughtList.jsx
import PropTypes from 'prop-types';
import ThoughtItem from './ThoughtItem';

const ThoughtList = ({ thoughts, onLike }) => {
  return (
    <ul>
      {thoughts.map(thought => (
        <ThoughtItem key={thought._id} thought={thought} onLike={onLike} />
      ))}
    </ul>
  );
};

ThoughtList.propTypes = {
  thoughts: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
      hearts: PropTypes.number.isRequired,
      createdAt: PropTypes.string.isRequired
    })
  ).isRequired,
  onLike: PropTypes.func.isRequired
};

export default ThoughtList;
