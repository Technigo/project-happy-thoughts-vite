import React from "react";


export const ThoughtForm = ({ onFormSubmit, newThought, onNewThoughtChange }) => {

  const disableSubmit = newThought.length < 6 || newThought.length > 140;

  return (
    <form className="form-container" onSubmit={onFormSubmit}>
      <label>
        <h3>What makes you happy..</h3>
        <textarea
          className="thought-input"
          value={newThought}
          onChange={onNewThoughtChange}
          placeholder="Write something here"
          required
        />
      </label>

      <button
        type="submit"
        className="submit-thought"
        aria-label="button for submit thought"
        disabled={disableSubmit}
      >
        ❤️ Send Happy Thought ❤️
      </button>
    </form>
  );
};
