import { useState } from "react";
import PropTypes from "prop-types";

const ThoughtForm = ({ addThought }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: message }),
    })
      .then((response) => response.json())
      .then((newThought) => {
        addThought(newThought);
        setMessage("");
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <form onSubmit={handleSubmit} className="thought-form">
      <textarea
        className="thought-input"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        placeholder="What's making you happy right now?"
      ></textarea>
      <button type="submit" className="thought-submit">
        ❤️Send Happy Thought!❤️
      </button>
    </form>
  );
};

ThoughtForm.propTypes = {
  addThought: PropTypes.func.isRequired,
};

export default ThoughtForm;
