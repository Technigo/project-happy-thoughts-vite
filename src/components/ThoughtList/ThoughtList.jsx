import { Thought } from '../Thought/Thought.jsx'

import React from 'react'

export const ThoughtList = ({ thoughts }) => {
  return (
    <div>
        {thoughts.map(thought => (
            <Thought key={thought._id} {...thought} />
        ))}
    </div>
  );
};
