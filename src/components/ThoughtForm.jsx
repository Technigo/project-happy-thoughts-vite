import { useState } from "react";

export const ThoughtForm = ({ thoughts, setThoughts }) => {
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts", {
      method: "POST",
      body: JSON.stringify({ message }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((newThought) => {
        setThoughts((previousThoughts) => [newThought, ...previousThoughts]);
      });
  };

  return (
    <form className="input-box" onSubmit={handleSubmit}>
      <p>What's making you happy right now?</p>
      <textarea
        type="text"
        placeholder="Write a happy thought"
        value={message}
        onChange={handleChange}
      />
      <button className="submit-button" type="submit">
        ❤️ Send Happy Thought ❤️
      </button>
    </form>
  );
};
