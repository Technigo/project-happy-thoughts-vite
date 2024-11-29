import './ThoughtItem.css';
import likeIcon from '../assets/heart.png';
import moment from 'moment';

export const ThoughtItem = ({ thought, isLiked, onLike }) => {
  const handleLike = async () => {
    if (isLiked) return;

    try {
      await fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thought._id}/like`, {
        method: 'POST',
      });
      onLike(thought._id);
    } catch (error) {
      console.error('Failed to like thought:', error);
    }
  };

  return (
    <div className="thought-item">
      <p>{thought.message}</p>
      <div className="bottom-row">
        <div className="heart-container">
          <button
            onClick={handleLike}
            disabled={isLiked} 
            className={isLiked ? 'liked' : ''}
          >
            <img src={likeIcon} alt="like" />
          </button>
          <span>x {thought.hearts}</span>
        </div>
        <span className="timestamp">{moment(thought.createdAt).fromNow()}</span>
      </div>
    </div>
  );
};
