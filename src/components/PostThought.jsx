import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './PostThought.css';

export const PostThought = ({ onNewThought }) => {
  const [newPost, setNewPost] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    
    if (newPost.length <= 4) {
      setErrorMessage("Your message is too short, it needs at least 5 letters 😔");
      return;
    }

    const options = {
      method: "POST",
      body: JSON.stringify({
        message: newPost,
      }),
      headers: { "Content-Type": "application/json" },
    };

    try {
      const response = await fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts", options);
      const data = await response.json();
      if (data) {
        onNewThought();
        setNewPost("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>What is making you happy right now?</h2>
      <form onSubmit={handleFormSubmit}>
        <textarea
          rows="5"
          cols="50"
          placeholder="If music be the food of love, play on. – William Shakespeare"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        />
        <div>
          <p className="error">{errorMessage}</p>
          <p className={`length ${newPost.length >= 140 ? "red" : ""}`}>
            {newPost.length}/140
          </p>
        </div>
        <button type="submit">
          ❤️ Send Happy Thought ❤️
        </button>
      </form>
    </div>
  );
};

PostThought.propTypes = {
  onNewThought: PropTypes.func.isRequired,
};
