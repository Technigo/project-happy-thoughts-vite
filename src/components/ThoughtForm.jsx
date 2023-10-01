import React, { useState } from 'react';

function ThoughtForm({ onNewThought }) {
  const [newThought, setNewThought] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if newThought is not empty
    if (newThought.trim() === '') {
      return;
    }

    // Create the new thought object
    const thoughtData = {
      message: newThought,
    };

    // Call the onNewThought callback to submit the new thought
    onNewThought(thoughtData);

    // Clear the input field
    setNewThought('');
  };

  return (
    <div className="thought-form-container">
      <h2>Share Your Happy Thought</h2>
      <form onSubmit={handleSubmit} className="thought-form">
        <div className="thought-input-container">
          <textarea
            rows="3"
            placeholder="What's making you happy?"
            value={newThought}
            onChange={(e) => setNewThought(e.target.value)}
            className="thought-input"
          ></textarea>
          <div className="character-count">{newThought.length}/140</div>
        </div>
        <button type="submit" className="thought-button">❤️ Send Happy Thought ❤️</button>
      </form>
    </div>
  );
}

export default ThoughtForm;


