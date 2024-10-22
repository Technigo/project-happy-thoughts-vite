import { useState } from "react";

// eslint-disable-next-line react/prop-types
export const ThoughtForm = ({ onFormSubmit }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (message.length < 5 || message.length > 140) {
      alert("Message must be between 5 and 140 characters.");
      return;
    }
    onFormSubmit(message);
    setMessage(""); // Clear the form
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 htmlFor="thought">What’s making you happy right now?</h1>
      <input
        id="thought"
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="React is making me happy!"
      />
      <button type="submit">
        <span role="img" aria-label="heart">
          ❤️
        </span>{" "}
        Send Happy Thought{" "}
        <span role="img" aria-label="heart">
          ❤️
        </span>
      </button>
    </form>
  );
};
