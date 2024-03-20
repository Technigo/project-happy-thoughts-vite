import { useState } from "react";

export const Form = ({ addThought, apiUrl }) => {
  const [newThought, setNewThought] = useState("");

  const handleNewThought = (event) => {
    setNewThought(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send a POST request to the API endpoint
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: newThought }),
    })
      .then((response) => response.json())
      .then((newThought) => {
        addThought(newThought);
        setNewThought("");
      })
      .catch((error) => {
        console.error("Error adding new thought:", error);
      });
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
