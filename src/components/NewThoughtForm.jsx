import { useState } from "react";

export const NewThoughtForm = ({ setThoughts, apiUrl }) => {
  const [message, setMessage] = useState("");
  const [charactersUsed, setCharactersUsed] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [isRed, setIsRed] = useState(false);

  const handleChange = (event) => {
    const newMessage = event.target.value;
    setMessage(newMessage);
    setCharactersUsed(newMessage.length);
    if (newMessage.length > 140) {
      setIsRed(true);
    } else {
      setIsRed(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (message.length < 5) {
      setErrorMessage("Thought must be longer than 5 characters");
      return;
    } else if (message.length > 140) {
      setErrorMessage("Thought must not exceed 140 characters");
      return;
    } else {
      try {
        const response = await fetch(apiUrl, {
          method: "POST",
          body: JSON.stringify({ message: message }),
          headers: { "Content-Type": "application/json" },
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        const newThought = result.response;

        setThoughts((previousThoughts) => [newThought, ...previousThoughts]);
        setMessage("");
        setErrorMessage("");
        setCharactersUsed(0);
      } catch (error) {
        console.error("Error adding new thought:", error);
      }
    }
  };

  return (
    <form className="box input-box" onSubmit={handleSubmit}>
      <p>What's making you happy right now?</p>
      <textarea
        type="text"
        placeholder="Write a happy thought"
        id="new-thought"
        value={message}
        onChange={handleChange}
      />
      <label htmlFor="new-thought" className="visually-hidden">
        Write a happy thought
      </label>
      <span className={isRed ? "red-message" : ""}>
        {charactersUsed}/140 <span id="error-message">{errorMessage}</span>
      </span>
      <button className="submit-button" type="submit">
        ❤️ Send Happy Thought ❤️
      </button>
    </form>
  );
};
