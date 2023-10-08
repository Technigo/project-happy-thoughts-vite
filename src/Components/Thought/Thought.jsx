import { useState, useEffect } from 'react';
import style from './Thought.module.css';


export const Thought = ({ thought }) => {
  
  return (
    <div className={style['thought-style']}>
      <h3>Happy Thought</h3>
      <p>{thought.message}</p>
      <span>Like this<button onClick={() => {
        fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thought._id}/like`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' }
        })
          .then(() => {
            window.location.reload();
          });
      }} className={style['like-button']}>❤️</button>x {thought.hearts}</span>
      {/* <p>Number of likes: {thought.hearts}</p> */}
      <p>{formatTime(thought.createdAt)}</p>
    </div>
  );
};    


// Helper function to format timestamp
const formatTime = (timestamp) => {
  const date = new Date(timestamp);
  const now = new Date();

  const timeDifference = now - date;
  const minutes = Math.floor(timeDifference / (1000 * 60)); // Calculate minutes
  const hours = Math.floor(timeDifference / (1000 * 60 * 60)); // Calculate hours
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // Calculate days

  if (minutes < 60) {
    return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
  } else if (hours < 24) {
    return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
  } else {
    return `${days} ${days === 1 ? 'day' : 'days'} ago`;
  }
};

