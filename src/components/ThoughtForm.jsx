import React, { useState } from 'react';
import './ThoughtForm.css';

const ThoughtForm = ({ setThoughts }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (message.length < 5 || message.length > 140) return; // Simple validation

    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', {
      method: 'POST',
      body: JSON.stringify({ message }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((newThought) => {
        setThoughts((prevThoughts) => [newThought, ...prevThoughts]);
        setMessage(''); // Clear the form input
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
      <button type="submit">Send Happy Thought</button>
    </form>
  );
};

export default ThoughtForm;
