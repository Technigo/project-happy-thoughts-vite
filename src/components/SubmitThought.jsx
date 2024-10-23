// SubmitThought.jsx 

// components/SubmitThought.jsx
import { useState } from 'react';

export const SubmitThought = ({ onSubmit }) => {
  const [message, setMessage] = useState('');
  // Add new state for error messages
  const [error, setError] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Clear any previous error messages
    setError('');

    // Validate message length
    if (message.length === 0) {
      setError('Please write a message');
      return;
    }
    if (message.length < 5) {
      setError('Message must be at least 5 characters long');
      return;
    }
    if (message.length > 140) {
      setError('Message cannot be longer than 140 characters');
      return;
    }
    
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: message })
    })
      .then(res => res.json())
      .then(newThought => {
        // Check if the API returned an error
        if (newThought.error) {
          setError(newThought.error);
          return;
        }
        setMessage(''); // Clear the input
        onSubmit(newThought); // Add the new thought to the list
      })
      .catch(() => {
        setError('Something went wrong. Please try again.');
      });
  };

  return (
    <form onSubmit={handleSubmit} className="submit-form">
      <h2>What's making you happy right now?</h2>
      <textarea
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
          // Clear error when user starts typing
          setError('');
        }}
        className="thought-input"
        placeholder="Write your happy message here..."
      />
      {/* Show error message if it exists */}
      {error && <p className="error-message">{error}</p>}
      <button type="submit" className="submit-button">
        ❤️ Send Happy Thought ❤️
      </button>
    </form>
  );
};