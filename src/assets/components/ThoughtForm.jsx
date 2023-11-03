import { useState } from "react";

export const ThoughtForm = ({ onThoughtSubmit }) => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (message.length >= 5 && message.length <= 140) {
      fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      })
        .then((response) => response.json())
        .then((newThought) => {
          onThoughtSubmit(newThought); // Update the parent component's state
          setMessage(""); // Clear the input field
          setError("");
        })
        .catch((error) => console.error("Error posting thought:", error));
    } else {
      setError("Message must be 5-140 characters long.");
    }
  };

  const handleInputChange = (e) => {
    const inputMessage = e.target.value;
    setMessage(inputMessage);

    // Calculate the remaining characters
    const remainingChars = 140 - inputMessage.length;

    // If the user exceeds the character limit, set the error message and add a CSS class
    if (remainingChars < 0) {
      setError('Message must be 5-140 characters long.');
    } else {
      setError('');
    }
  };

  return (
    <div>
      <h2>Post a Happy Thought</h2>
      <form onSubmit={handleFormSubmit}>
        <textarea
          value={message}
          onChange={handleInputChange}
          placeholder="What's your happy thought?"
        />
         <p className={error ? 'error' : 'char-count'}>{140 - message.length} characters remaining</p>
        {error && <p className="error">{error}</p>}
        <button type="submit">❤️ Send Happy Thought ❤️</button>
      </form>
    </div>
  );
};
