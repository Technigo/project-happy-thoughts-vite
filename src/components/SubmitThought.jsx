// components/SubmitThought.jsx
import { useState } from 'react';

export const SubmitThought = ({ onSubmit }) => {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    setError('');

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
    
    fetch('https://happy-thoughts-api-hvg8.onrender.com/thoughts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: message })
    })
      .then(res => res.json())
      .then(data => {
        // Check if the API returned an error
        if (!data.success) {
          setError(data.message);
          return;
        }
        setMessage(''); // Clears the input
        onSubmit(data.response); // Pass the thought object from the response
      })
      .catch((err) => {
        console.error('Error:', err);
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
          setError('');
        }}
        className="thought-input"
        placeholder="Write your happy message here..."
      />
      {error && <p className="error-message">{error}</p>}
      <button type="submit" className="submit-button">
        ❤️ Send Happy Thought ❤️
      </button>
    </form>
  );
};