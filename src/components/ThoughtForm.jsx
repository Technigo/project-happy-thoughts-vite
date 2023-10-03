import React, { useState } from 'react';

function ThoughtForm({ onNewThought, handleSubmit, status, message }) {
  const [newThought, setNewThought] = useState('');
  const [charCount, setCharCount] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setNewThought(inputValue);
    setCharCount(inputValue.length);
    // Clear the error message when the user starts typing
    setErrorMessage('');
  };

  const apiKey = '20231002172134';

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Check if newThought is not empty
    if (newThought.trim() === '') {
      setErrorMessage('Please enter a message.'); // Show an error message for empty input
      return;
    }

    if (newThought.length < 5 || newThought.length > 140) {
      setErrorMessage('You can only use 5-140 characters. Please try again🙂'); // Show an error message for invalid length
      return;
    }

    const thoughtData = {
      message: newThought,
    };

    // Use the handleSubmit function from props
    handleSubmit(thoughtData);
  };

  return (
    <div className="thought-form-container">
      <h2>Share Your Happy Thought</h2>
      <form onSubmit={handleFormSubmit} className="thought-form">
        <textarea
          rows="3"
          placeholder="What's making you happy?"
          value={newThought}
          onChange={handleInputChange}
          className="thought-input"
          maxLength="140"
        ></textarea>
        <div className="character-count">
          {charCount}/140
        </div>
        {status === 'success' && (
          <p className="success-message">{message}</p>
        )}
        {status === 'error' && (
          <p className="error-message">{message}</p>
        )}
        {errorMessage && (
          <p className="error-message">{errorMessage}</p>
        )}
        <button type="submit" className="thought-button">❤️ Send Happy Thought ❤️</button>
      </form>
    </div>
  );
}

export default ThoughtForm;











