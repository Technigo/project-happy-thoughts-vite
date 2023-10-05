import { useState, useEffect } from "react";

export const NewThoughts = () => {
  const [newThoughts, setNewThoughts] = useState(""); // Define state variable

  const handleSubmit = (e) => {
    e.preventDefault();

    setNewThoughts("");
  };

  useEffect(() => {}, []);

  return (
    <div className="newThoughtsContainer">
      <h2>What makes you happy right now?</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          type="text"
          value={newThoughts}
          onChange={(e) => setNewThoughts(e.target.value)}
          rows="3"
          maxLength="140"
          placeholder='"Most folks are about as happy as they make up their minds to be." -Abraham Lincoln'
          className="inputField"
        />
        <button type="submit" className="submitButton">
          ❤️ Send Happy Thought ❤️
        </button>
      </form>
    </div>
  );
};
