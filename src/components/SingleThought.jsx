import React, { useState } from 'react';
import { TimeAgo } from './TimeAgo';
import './SingleThought.css';

export const SingleThought = ({ message, fetchThoughts }) => {
  const [numLikes, setNumLikes] = useState(message.hearts);
  const [isLiked, setIsLiked] = useState(false);

  const onLikeIncrease = async () => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    };
  
    try {
      const response = await fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${message._id}/like`, options);
      if (!response.ok) {
        throw new Error('Failed to like message');
      }
      const data = await response.json();
      if (data) {
        setNumLikes(prevLikes => prevLikes + 1);
        setIsLiked(true);
        if (typeof fetchThoughts === 'function') {
          fetchThoughts();
        } else {
          console.error('fetchThoughts is not a function:', fetchThoughts);
        }
      }
    } catch (error) {
      console.error('Error liking message:', error);
    }
  };

  return (
    <div className='single-thought'>
      <p>{message.message}</p>
      {/* Use TimeAgo component to display the timestamp */}
      {message.createdAt && (
        <p className="timestamp">
          <TimeAgo timestamp={message.createdAt} />
        </p>
      )}
      <button 
        className={`like-button ${isLiked ? 'liked' : ''}`} 
        onClick={onLikeIncrease}
      >
        ❤️
      </button>
      <span> x{numLikes}</span>
    </div>
  );
};
