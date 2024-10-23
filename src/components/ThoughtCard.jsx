// components/ThoughtCard.jsx

import React from 'react'; 

export const ThoughtCard = ({ thought }) => {
  return ( 
    <div className="thought-card">
      <p>{thought.message}</p>
        <p>❤️ {thought.hearts}</p>
    </div> 
  );
};