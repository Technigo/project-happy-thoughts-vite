import { useState, useEffect } from "react";

export const NewThought = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  };

  const [thought, setThought] = useState("")

  const handleFormSubmit = (e) => {
    setThought(e.target.value)
  };

  const submitForm = () => {
    console.log("Submited form: ", thought)
  };

  return (
    <div className="new-thought-container">
      <h3>What makes you happy right now?</h3>
      <form
        className="thought-form"
        onSubmit={handleSubmit}>
        <label htmlFor="thought">
          <textarea
            className="text-area"
            rows={5}
            cols={30}
            minLength={5}
            maxLength={140}
            id="thought"
            placeholder="Example: The sunshine makes me happy!"
            value={thought}
            onChange={handleFormSubmit} />
        </label>
      </form>

      <button className="submit-btn" onClick={submitForm}>❤️ Send Happy Thought ❤️</button>
    </div>      
  );
};