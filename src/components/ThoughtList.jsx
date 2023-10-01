// ThoughtList.jsx

import React from 'react';
import Thought from './Thought';

function ThoughtList({ thoughts }) {
  return (
    <div className="thought-list">
      <h2>Recent Thoughts</h2>
      {thoughts.map((thought) => (
        <Thought key={thought._id} thought={thought} />
        // Use thought._id as the key
      ))}
    </div>
  );
}

export default ThoughtList;

