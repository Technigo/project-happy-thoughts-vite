//This component will represent an individual thought.
// Thought.jsx

import React, { useState } from 'react';

function Thought({ thought }) {
  const [hearts, setHearts] = useState(thought.hearts);

  console.log('Thought component received thought:', thought);

  const handleLikeClick = () => {
    console.log('Clicked like on thought:', thought._id);
    fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thought._id}/like`, {
      method: 'POST',
    })
      .then((response) => response.json())
      .then((data) => {
        // Update the number of likes (hearts) in the UI
        setHearts(data.hearts);
      })
      .catch((error) => {
        console.error('Error liking thought:', error);
      });
  };

  return (
    <div className="thought">
      <p>{thought.message}</p>
      <button onClick={handleLikeClick}>❤️ {hearts}</button>
    </div>
  );
}

export default Thought;

