// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import NewThoughts from './NewThoughts';

const HappyThoughts = () => {
  console.log('HappyThoughts component rendering...');
  const [message, setMessage] = useState([]);

  useEffect(() => {
    console.log('Fetching thoughts from API...');
    fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts")
      .then(res => res.json())
      .then(json => {
        setMessage(json);
      });
  }, []);

  const handleThoughtSubmit = (newThought) => {
    fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: newThought }),
    })
    .then(res => res.json())
    .then(newThought => {
      setMessage(prevMessages => [newThought, ...prevMessages]);
    })
    .catch(error => console.error('Error posting thought:', error));
  };
  console.log('HappyThoughts component rendered successfully.');
  return (
    <div className='main-wrapper'>
      <div className='post-wrapper'>
        <h3>What is making you happy right now?</h3>
        <NewThoughts onThoughtSubmit={handleThoughtSubmit} />
      </div>
      <div className='list-wrapper'>
        {message.map((thought, index) => (
          <div key={index}>
            {thought.message} - {thought.hearts} hearts
            <button onClick={() => handleThoughtSubmit(thought.message)} aria-label="Like thought">❤️</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HappyThoughts;