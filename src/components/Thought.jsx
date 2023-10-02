import React, { useState } from 'react';

function Thought({ thought }) {
  const [hearts, setHearts] = useState(thought.hearts);

  const handleLikeClick = async () => {
    // Construct the URL with the correct _id value
    const likeUrl = `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thought._id}/like`;
  
    try {
      const response = await fetch(likeUrl, {
        method: 'POST',
      });
  
      if (response.ok) {
        // Use the functional update form of setState to ensure the latest state is used
        setHearts((prevHearts) => prevHearts + 1);
      } else {
        console.error('Error liking thought:', response.status);
      }
    } catch (error) {
      console.error('Error liking thought:', error);
    }
  };
  

  return (
    <div className="thought">
      <p className="thought-message">{thought.message}</p>
      <button onClick={handleLikeClick} className="thought-like-button">❤️ {hearts}</button>
    </div>
  );
}

export default Thought;





