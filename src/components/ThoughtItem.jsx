// ThoughtItem.jsx
import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import './styleForm.css';

const ThoughtItem = ({ thought, onLike }) => {
  // Format time difference using date-fns
  const formatTimeDifference = (timestamp) => {
    const messageTime = new Date(timestamp);
    return formatDistanceToNow(messageTime, { addSuffix: true });
  };

  return (
    <div className="messageContainer"> {/* Uses your existing messageContainer class */}
      <div className="messageBox"> {/* Existing messageBox class */}
        <p className="messageText">{thought.message}</p> {/* Uses existing messageText class */}
      </div>
      <div className="likeContainer"> {/* Existing likeContainer class */}
        <button className="heartsButton" onClick={() => onLike(thought._id)}>
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/emoji/48/heart-suit.png"
            alt="heart"
          />
        </button>
        <div className="infoText"> {/* Existing infoText class */}
          <p className="likeCount">x {thought.hearts}</p> {/* Existing likeCount class */}
          <p className="messageTime">{formatTimeDifference(thought.createdAt)}</p> {/* Existing messageTime class */}
        </div>
      </div>
    </div>
  );
};

export default ThoughtItem;

