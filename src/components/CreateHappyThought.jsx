import { useState } from "react";
import "./CreateHappyThought.css";

export const CreateHappyThought = () => {
  const [thought, setThought] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [error, setError] = useState(false);
  const minLength = 4;
  const maxLength = 140;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (thought.length < minLength) {
      setError(true);
    } else {
      // Proceed with form submission logic
      console.log("Form submitted:", thought);
      // Reset form and state
      setThought("");
      setError(false);
    }
  };

  return (
    <>
      <h1 className="create-thought__title">Share a happy thought</h1>
      <form className="create-thought__form" onSubmit={handleSubmit}>
        <label htmlFor="create-thought">
          What is making you happy right now?
        </label>
        <textarea
          id="create-thought"
          name="create-thought"
          aria-describedby="character-count"
          minLength={minLength}
          maxLength={maxLength}
          rows="5"
          cols="33"
          required
          value={thought}
          onChange={(e) => {
            setThought(e.target.value);
            // Clear error if input becomes valid while typing
            if (error && e.target.value.length >= minLength) {
              setError(false);
            }
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            setIsFocused(false);
            if (thought.length < minLength) {
              setError(true);
            } else {
              setError(false);
            }
          }}
        />
        {!isFocused && error && (
          <div className="info info--error" role="alert">
            <p>You need to type at least {minLength} characters.</p>
          </div>
        )}
        <output id="character-count" aria-live="polite">
          {thought.length} of {maxLength}
        </output>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
