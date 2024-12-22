import React from 'react'; 
import './ThoughtItem.css';
import likeIcon from '../assets/heart.png';
import moment from 'moment';

interface Thought {
  _id: string;
  message: string;
  hearts: number;
  createdAt: string;
}

interface ThoughtItemProps {
  thought: Thought;
  isLiked: boolean;
  onLike: (id: string) => void;
}

export const ThoughtItem: React.FC<ThoughtItemProps> = ({ thought, isLiked, onLike }) => {
  const handleLike = async () => {
    if (isLiked) return;

    try {
      await fetch(`https://project-happy-thoughts-api-hc1b.onrender.com/thoughts/${thought._id}/like`, {
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
