import PropTypes from 'prop-types';

const ThoughtsList = ({ thoughts, onThoughtLiked }) => {
  const handleLike = async (thoughtId) => {
    try {
      const response = await fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thoughtId}/like`, {
        method: 'POST',
      });
      if (response.ok) {
        onThoughtLiked(thoughtId); // Callback to update the thought's heart count in the parent component
      } else {
        console.error('Failed to like the thought');
      }
    } catch (error) {
      console.error('Error liking the thought:', error);
    }
  };

  const formatTimeAgo = (createdAt) => {
    const now = new Date();
    const postDate = new Date(createdAt);
    const diffInMs = now - postDate;
    const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    if (diffInMinutes < 60) {
      return `${diffInMinutes} minute${diffInMinutes !== 1 ? 's' : ''} ago`;
    } else if (diffInHours < 24) {
      return `${diffInHours} hour${diffInHours !== 1 ? 's' : ''} ago`;
    } else {
      return `${diffInDays} day${diffInDays !== 1 ? 's' : ''} ago`;
    }
  };

  return (
    <>
      <ul>
        {thoughts.map((thought) => (
          <li key={thought._id}>
            <p className="thought-p">{thought.message}</p>
            <div className="heart-time-div">
              <div className="heart-info">
                <button className="heart-button" onClick={() => handleLike(thought._id)}>❤️</button>
                <p> x {thought.hearts}</p>
              </div>
              <p className="posted-time">{formatTimeAgo(thought.createdAt)}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
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
  onThoughtLiked: PropTypes.func.isRequired,
};

export default ThoughtsList;
