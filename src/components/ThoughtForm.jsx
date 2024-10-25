import { useState } from "react";

// eslint-disable-next-line react/prop-types
export const ThoughtForm = ({ onFormSubmit }) => {
  // Declare a state variable to hold the user's input
  // 'message' is the current value of the input, and 'setMessage' is used to update it
  const [message, setMessage] = useState("");
  // Function to handle form submission
  const handleSubmit = (event) => {
    // Prevent the form's default behavior of reloading the page when submitted
    event.preventDefault();
    if (message.length < 5 || message.length > 140) {
      alert("Message must be between 5 and 140 characters."); // Show an alert if it's not valid
      return;// Stop the function if the message is invalid
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
