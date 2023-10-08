import React from 'react';
import style from './Thought.module.css';

export const Thought = ({ thought }) => {
  return (
    <div >
      <p>Happy Thought</p>
      <p>{thought.message}</p>
      <button className={style['like-button-style']}>❤️</button>
      <p>Number of likes: {thought.hearts}</p>
      <p>Time: {formatTime(thought.createdAt)}</p>
    </div>
  );
};

// Helper function to format timestamp
const formatTime = (timestamp) => {
  const date = new Date(timestamp);
  return date.toLocaleString(); // Customize the format as needed
};
