import React, { useState } from 'react';

function Thought({ thought, refetchThoughts }) {
  const [hearts, setHearts] = useState(thought.hearts);

  const postLike = () => {
    return fetch(`https://happy-i9ng.onrender.com/thoughts/${thought._id}/like`, {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer 20231002172134', 
      },
    });
  }; // <- Added a closing brace here

  const toggleLike = () => {
    postLike()
      .then((response) => response.json())
      .then((data) => {
        setHearts(data.hearts);
      })
      .catch((error) => {
        console.error('Error liking thought:', error);
      })
      .finally(() => {
        // Trigger a refetch of thoughts to update the UI
        if (refetchThoughts) {
          refetchThoughts();
        }
      });
  };

  return (
    <div className="thought">
      <p className="thought-message">{thought.message}</p>
      <button onClick={toggleLike} className="thought-like-button">❤️ {hearts}</button>
    </div>
  );
}

export default Thought;






