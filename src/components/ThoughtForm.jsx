import React, { useState } from "react";
import './ThoughtForm.css';

export const ThoughtForm = ({ setThoughts }) => {
  const [thought, setThought] = useState("");
  const [error, setError] = useState("");
  const [isPosting, setIsPosting] = useState(false);

  const minLength = 5;
  const maxLength = 140;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (thought.length < minLength) {
      setError(`Thought must be at least ${minLength} characters.`);
      return;
    }

    setIsPosting(true);
    try {
      const response = await fetch(
        "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: thought }),
        }
      );
      if (!response.ok) throw new Error("Failed to post thought.");
      
      const newThought = await response.json();
      setThoughts((prevThoughts) => [newThought, ...prevThoughts]);
      setThought(""); // This clears the input field
      setError("");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsPosting(false);
    }
  };

  return (
    <div className="thought-form">
      <h2>Share a happy thought</h2>
      <p>What is making you happy right now?</p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={thought}
          maxLength={maxLength}
          onChange={(e) => {
            setThought(e.target.value);
            if (error && e.target.value.length >= minLength) {
              setError(""); // This clears the errors if valid
            }
          }}
          placeholder="What is making you happy right now?"
        />
        <div className="character-count">{thought.length} of {maxLength}</div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" disabled={isPosting}>
          {isPosting ? "Posting..." : "Post happy thought"}
        </button>
      </form>
    </div>
  );
};
