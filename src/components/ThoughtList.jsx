import React from 'react';
import Thought from './Thought';

function ThoughtList({ thoughts }) {
  return (
    <div className="thought-list">
      <h2>Recent Thoughts</h2>
      {thoughts.map((thought) => (
        <Thought key={thought.key} thought={thought} />
      ))}
    </div>
  );
}

export default ThoughtList;

