import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './PostThought.css';

export const PostThought = ({ onNewThought }) => {
  // State for post and error message
  const [newPost, setNewPost] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Form submission to API
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // Validation for message length
    if (newPost.length <= 4) {
      setErrorMessage("Your message is too short, it needs at least 5 letters 😔");
      return;
    }
    if (newPost.length > 140) {
      setErrorMessage("Your message is too long 😔");
      return;
    }
    // API request configuration
    const options = {
      method: "POST",
      body: JSON.stringify({ message: newPost }),
      headers: { "Content-Type": "application/json" },
    };
    try {
      // Send post message to API
      const response = await fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts", options);
      const data = await response.json();
      // Trigger provided callback and reset state
      if (data) {
        onNewThought();
        setNewPost("");
        setErrorMessage("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Rendering component
  return (
    <div className='post-wrapper'>
      <h2>What is making you happy right now?</h2>
      <form onSubmit={handleFormSubmit}>
        <textarea
          rows="5"
          cols="50"
          placeholder="If music be the food of love, play on. – William Shakespeare"
          value={newPost}
          onChange={(e) => {
            // Handle text input and validate length
            setNewPost(e.target.value);
            if (e.target.value.length > 140) {
              setErrorMessage("Your message is too long 😔");
            } else {
              setErrorMessage("");
            }
          }}
        />
        <div className="message-info">
          {/* Displaying error and message length */}
          <p className="error">{errorMessage}</p>
          <p className={`length ${newPost.length >= 140 ? "red" : ""}`}>
            {newPost.length}/140
          </p>
        </div>
        {/* Submit Button */}
        <button type="submit">
          ❤️ Send Happy Thought ❤️
        </button>
      </form>
    </div>
  );
};

// Prop-Types for component props validation
PostThought.propTypes = {
  onNewThought: PropTypes.func.isRequired,
};
