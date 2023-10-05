import React, { useState } from 'react';
import TimeAgo from './TimeAgo';  // Import TimeAgo component

export const SingleThought = ({ message, fetchPosts }) => {
  const [liked, setLiked] = useState(false);
  const [numLikes, setNumLikes] = useState(message.hearts);

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
        setLiked(true);
        fetchPosts();
      }
    } catch (error) {
      console.error('Error liking message:', error);
    }
  };

  return (
    <div>
      <p>{message.message}</p>
      <p><TimeAgo timestamp={message.createdAt} /></p>
      <button 
        onClick={onLikeIncrease} 
        disabled={liked} 
        style={{ backgroundColor: liked ? 'lightgray' : 'pink' }}
      >
        ❤️
      </button>
      <span>{numLikes}</span>
    </div>
  );
};
