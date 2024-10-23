import React from "react";


export const HappyThoughtForm = () => {
  onFormSubmit,
    newThought,
    oneNewThoughtChange,

}) => {

  const disableSubmit = newThought.length < 6 || newThought.length > 140;

  return (

    <form className="form-container" onSubmit={onFormSubmit}>
      <label>
        <h3> "what makes you happy.."


          <textarea
            className="thought-input"
            value={newThought}
            onChange={oneNewThoughtChange}
            placeholder="Write something here"
            required
          />
      </label>

      <button
        type="submit"
        className="submit-thought"
        aria-label="button for submit thought"
        disabled={disableSubmit}
        required
      >
        ❤️ Send Happy Thought ❤️
      </button>
    </form>
  );
};
