import React, { useState } from "react";
import PropTypes from "prop-types";
import "./MessageInput.css";

export const MessageInput = ({ sendMessage }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!inputValue.trim()) return; // Prevent submitting empty messages

    sendMessage(inputValue);
    setInputValue(""); // Clear input field after submitting
  };

  return (
    <div className="message-container">
      <form className="messageForm" onSubmit={handleSubmit}>
        <p>What's making you happy right now?</p>
        <input
          type="text"
          placeholder="Type your happy thought.."
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button className="submit-button" type="submit">
          ❤️
          <p className="button-text"> Send Happy Thought </p>
          ❤️
        </button>
      </form>
    </div>
  );
};

MessageInput.propTypes = {
  sendMessage: PropTypes.func.isRequired,
};
