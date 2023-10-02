//This component will represent an individual thought.
// Thought.jsx

import React, { useState } from 'react';

function Thought({ thought }) {
  const [hearts, setHearts] = useState(thought.hearts);

  const handleLikeClick = () => {
    // Construct the URL with the correct _id value
    const likeUrl = `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/like`;

  
    fetch(likeUrl, {
      method: 'POST',
    })
      .then((response) => response.json())
      .then((data) => {
        setHearts(data.hearts);
      })
      .catch((error) => {
        console.error('Error liking thought:', error);
      });
  };

  return (
    <div className="thought">
      <p className="thought-message">{thought.message}</p>
      <button onClick={handleLikeClick} className="thought-like-button">❤️ {hearts}</button>
    </div>
  );
}

export default Thought;


