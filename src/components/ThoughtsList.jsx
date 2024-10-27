import React from 'react';

const ThoughtsList = ({ thoughts, onLike }) => {
  return (
    <div className="thoughts-list">
      {thoughts.map((thought) => (
        <div key={thought._id} className="thought">
          <p>{thought.message}</p>
          <div className="like-section">
            <button className="like-button" onClick={() => onLike(thought._id)}>❤️</button>
            <span className="like-count"> x {thought.hearts}</span>
          </div>
          <span className="timestamp">{new Date(thought.createdAt).toLocaleString()}</span>
        </div>
      ))}
    </div>
  );
};

export default ThoughtsList;
