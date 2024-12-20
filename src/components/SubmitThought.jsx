// SubmitThought.jsx 

// components/SubmitThought.jsx
import { useState } from 'react';

export const SubmitThought = ({ onSubmit }) => {
  // State for the input field value
  const [message, setMessage] = useState('');
  // State for error messages
  const [error, setError] = useState('');
  
  // Handler for form submission
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
    
    // Send POST request to create new thought
    fetch('https://happy-thoughts-api-hvg8.onrender.com/thoughts', {
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
        setMessage(''); // Clears the input
        onSubmit(newThought); // Updates the list
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