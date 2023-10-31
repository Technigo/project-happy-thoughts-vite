import React, { useState } from 'react';

export const ThoughtForm = ({ onThoughtSubmit }) => {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (message.length >= 5 && message.length <= 140) {
      fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      })
        .then((response) => response.json())
        .then((newThought) => {
          onThoughtSubmit(newThought); // Update the parent component's state
          setMessage(''); // Clear the input field
        })
        .catch((error) => console.error('Error posting thought:', error));
    } else {
      setError('Message must be 5-140 characters long.');
    }
  };

  return (
    <div>
      <h2>Post a Happy Thought</h2>
      <form onSubmit={handleFormSubmit}>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="What's your happy thought?"
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">Post</button>
      </form>
    </div>
  );
};
