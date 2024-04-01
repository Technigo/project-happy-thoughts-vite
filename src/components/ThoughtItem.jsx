import { useState } from 'react';
import PropTypes from 'prop-types';

const ThoughtItem = ({ thought, onLike }) => {
  const [localHearts, setLocalHearts] = useState(thought.hearts);

  const handleLikeClick = () => {
    fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thought._id}/like`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        onLike(thought._id); 
        setLocalHearts(localHearts + 1); 
      } else {
        console.error('Could not save heart:', response.statusText);
      }
    })
    .catch(error => console.error('Could not save heart:', error));
  };

  const calculateTimeElapsed = (createdAt) => {
    const postTime = new Date(createdAt);
    const currentTime = new Date();
    const timeDifference = Math.floor((currentTime - postTime) / 1000);

    if (timeDifference < 60) {
      return `${timeDifference} second${timeDifference !== 1 ? 's' : ''} ago`;
    } else if (timeDifference < 3600) {
      const minutes = Math.floor(timeDifference / 60);
      return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
    } else {
      const hours = Math.floor(timeDifference / 3600);
      return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
    }
  };

  return (
    <li className="thought-item">
      <p className='tought-message'>{thought.message}</p>
      <div className="thought-content">
        <div className="left-section">
          <button className="heart" onClick={handleLikeClick}>
            ❤️
          </button>
          <span className="heart-count"> x {localHearts}</span>
        </div>
        <div className="right-section">
          <span className="time">{calculateTimeElapsed(thought.createdAt)}</span>
        </div>
      </div>
    </li>
  );
};

ThoughtItem.propTypes = {
  thought: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    hearts: PropTypes.number.isRequired,
    createdAt: PropTypes.string.isRequired
  }).isRequired,
  onLike: PropTypes.func.isRequired
};

export default ThoughtItem;
