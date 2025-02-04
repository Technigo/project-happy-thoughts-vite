import { useState } from 'react';
import PropTypes from 'prop-types'; 

const ThoughtsList = ({ thoughts, onLike }) => {
  const [loadingLikes, setLoadingLikes] = useState({});

  const handleLikeClick = async (thoughtId) => {
    setLoadingLikes((prev) => ({ ...prev, [thoughtId]: true }));

    try {
      const response = await fetch(`https://project-happy-thoughts-api-lice.onrender.com/thoughts/${thoughtId}/like`, {
        method: 'POST',
      });

      if (!response.ok) {
        throw new Error('Failed to like the thought');
      }

      onLike(thoughtId);
    } catch (error) {
      console.error('Error liking thought:', error);
    } finally {
      setLoadingLikes((prev) => ({ ...prev, [thoughtId]: false }));
    }
  };

  return (
    <div className="thoughts-list">
      {thoughts.map((thought) => (
        <div key={thought._id} className="thought">
          <p>{thought.message}</p>
          <div className="like-section">
            <button
              className="like-button"
              onClick={() => handleLikeClick(thought._id)}
              disabled={loadingLikes[thought._id]}
            >
              {loadingLikes[thought._id] ? '❤️...' : '❤️'}
            </button>
            <span className="like-count"> x {thought.hearts}</span>
          </div>
          <span className="timestamp">{new Date(thought.createdAt).toLocaleString()}</span>
        </div>
      ))}
    </div>
  );
};

// ✅ Add PropTypes validation
ThoughtsList.propTypes = {
  thoughts: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
      hearts: PropTypes.number.isRequired,
      createdAt: PropTypes.string.isRequired,
    })
  ).isRequired,
  onLike: PropTypes.func.isRequired,
};

export default ThoughtsList;
