import React, { useState } from 'react';

const ThoughtForm = ({ onNewThought }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (message.length < 5 || message.length > 140) {
      alert("Message must be between 5 and 140 characters.");
      return;
    }

    try {
      const response = await fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) throw new Error('Failed to send thought');

      const newThought = await response.json();
      onNewThought(newThought); 
      setMessage(''); 
    } catch (error) {
      console.error('Error sending thought:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="thought-form">
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="What's making you happy right now?"
        rows="3"
      />
      <button type="submit">Post</button>
    </form>
  );
};

export default ThoughtForm;
