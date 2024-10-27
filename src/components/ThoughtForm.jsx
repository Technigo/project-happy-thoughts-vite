// component for main message on top of the page

import React, { useState } from 'react';
import './ThoughtForm.css';

const ThoughtForm = ({ setThoughts }) => {
  const [message, setMessage] = useState('');
  const [error, setError] = useState(''); // State to store error messages

  const handleSubmit = (event) => {
    event.preventDefault();
    
  // Validation for message length
  if (message.length < 5) {
    setError('Message must be at least 5 characters long.');
    return;
  } else if (message.length > 140) {
    setError('Message cannot be more than 140 characters long.');
    return;
  } else {
    setError(''); // Clear error if validation passes
  }

    // send post request
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', {
      method: 'POST',
      body: JSON.stringify({ message }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((newThought) => {
        setThoughts((prevThoughts) => [newThought, ...prevThoughts]);
        setMessage(''); // Clear the form input
      })
      .catch((error) => {
        console.error('Error submitting message:', error);
        setError('An error occurred while sending your message.');
      });
  };

  return (
    <form onSubmit={handleSubmit} className="thought-form">
       <h2>What's making you happy right now?</h2>
     
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Write your happy thought here..."
      />

            
      {/* Display error message if there's a validation error */}
      {error && <p className="error-message">{error}</p>}
      
      <button type="submit">Send Happy Thought</button>
    </form>
  );
};

export default ThoughtForm;
