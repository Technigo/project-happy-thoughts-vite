import { useState } from "react";

export const NewThoughtForm = ({ setThoughts, fetchData, apiUrl }) => {
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify({ message: message }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((newThought) => {
        setThoughts((previousThoughts) => [newThought, ...previousThoughts]);
        setMessage("");
        fetchData();
      });
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
      <button className="submit-button" type="submit">
        ❤️ Send Happy Thought ❤️
      </button>
    </form>
  );
};
