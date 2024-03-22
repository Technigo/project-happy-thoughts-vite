import { useState } from "react";

export const NewThoughtForm = ({ setThoughts, fetchData, apiUrl }) => {
  const [message, setMessage] = useState("");
  const [charactersUsed, setCharactersUsed] = useState(140);
  const [errorMessage, setErrorMessage] = useState("");
  const [isRed, setIsRed] = useState(false);

  const handleChange = (event) => {
    const newMessage = event.target.value;
    setMessage(newMessage);
    setCharactersUsed(() => 140 - newMessage.length);
    if (newMessage.length > 140) {
      setIsRed(true);
    } else {
      setIsRed(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (message.length < 5) {
      setErrorMessage("Thought must be longer than 5 characters");
      return;
    } else if (message.length > 140) {
      setErrorMessage("Thought must not exceed 140 characters");
      return;
    } else {
      fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify({ message: message }),
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => response.json())
        .then((newThought) => {
          setThoughts((previousThoughts) => [newThought, ...previousThoughts]);
          setMessage("");
          setErrorMessage("");
          setCharactersUsed(140);
        });
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
      <span className={isRed ? "red-message" : ""}>
        {charactersUsed}/140 <span id="error-message">{errorMessage}</span>
      </span>

      <label htmlFor="new-thought" className="visually-hidden">
        Write a happy thought
      </label>
      <button className="submit-button" type="submit">
        ❤️ Send Happy Thought ❤️
      </button>
    </form>
  );
};
