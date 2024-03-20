import { useState } from "react";

export const Form = ({ addThought }) => {
  const [newThought, setNewThought] = useState("");

  const handleNewThought = (event) => {
    setNewThought(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validate the new thought before submitting
  };
  return (
    <div>
      <form className="form-container" onSubmit={handleSubmit}>
        <label>
          What´s making you happy right now?
          <input
            type="text"
            value={newThought}
            onChange={handleNewThought}
            placeholder="Enter your thought"
          />
        </label>
        <button className="submit-button" type="submit">
          {" "}
          ❤ Send Happy Thought ❤{" "}
        </button>
      </form>
    </div>
  );
};
