import React, { useState } from "react";

const API_URL = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

const ThoughtForm = ({ onNewThought, setError }) => {
  const [newThought, setNewThought] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (newThought.length < 5 || newThought.length > 140) {
      setError("Message must be between 5 and 140 characters.");
      return;
    }

    setError("");

    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: newThought }),
    })
      .then((response) => response.json())
      .then((data) => {
        onNewThought(data);
        setNewThought("");
      })
      .catch((error) => {
        console.error("Error posting thought:", error);
        setError("Failed to post the thought. Please try again.");
      });
  };

  return (
    <form className="thought-form" onSubmit={handleSubmit}>
      <span className="thought-prompt">What's making you happy right now?</span>
      <textarea
        value={newThought}
        onChange={(e) => setNewThought(e.target.value)}
        placeholder="Write your happy thought here..."
        rows="4"
        maxLength="140"
      />
      <button type="submit" aria-label="Send your happy thought">
        Send Happy Thought
      </button>
    </form>
  );
};

export default ThoughtForm;
