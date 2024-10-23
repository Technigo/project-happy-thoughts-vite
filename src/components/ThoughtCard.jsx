// components/ThoughtCard.jsx

import React from 'react'; 
import { LikeButton } from './LikeButton';
import { CreatedAt } from './CreatedAt';

export const ThoughtCard = ({ thought }) => {
  return ( 
    <div className="thought-card">
      <p>{thought.message}</p>
      <div className="thought-footer">
        <LikeButton thoughtId={thought._id} initialHearts={thought.hearts} />
        <CreatedAt createdAt={thought.createdAt} /> 
      </div>
    </div> 
  );
};