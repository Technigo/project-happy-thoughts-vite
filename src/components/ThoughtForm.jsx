import React, { useState } from 'react';

function ThoughtForm({ onNewThought }) {
  const [newThought, setNewThought] = useState('');
  const [charCount, setCharCount] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setNewThought(inputValue);
    setCharCount(inputValue.length);
  };

  const apiKey = '20231002172134';

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
  
    try {
      const response = await fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify(thoughtData),
      });
  
      if (response.ok) {
        const newThoughtData = await response.json(); // Parse the response JSON
        onNewThought(newThoughtData); // Pass the new thought data to the callback
        setNewThought('');
        setCharCount(0);
        setErrorMessage('');
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.error || 'Failed to add new thought.');
      }
    } catch (error) {
      console.error('Error adding new thought:', error);
      setErrorMessage('Failed to add new thought.');
    }
  };
  

  return (
    <div className="thought-form-container">
      <h2>Share Your Happy Thought</h2>
      <form onSubmit={handleSubmit} className="thought-form">
        <textarea
          rows="3"
          placeholder="What's making you happy?"
          value={newThought}
          onChange={handleInputChange}
          className="thought-input"
          maxLength="140" // Add a maxLength attribute to limit character count
        ></textarea>
        <div className="character-count">
          {charCount}/140
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit" className="thought-button">❤️ Send Happy Thought ❤️</button>
      </form>
    </div>
  );
}

export default ThoughtForm;







