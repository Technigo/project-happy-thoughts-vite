import React, { useState } from "react";
import PropTypes from "prop-types";
import "./MessageInput.css";

export const MessageInput = ({ sendMessage }) => {
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.length < 5) {
      setErrorMessage("Your thought has to be longer than 5 characters.");
    } else if (inputValue.length > 140) {
      setErrorMessage(
        "Your thought is too long. It has to be less than 140 characters."
      );
    } else {
      // If there's no error, clear the error message
      setErrorMessage("");
      // Call sendMessage function
      sendMessage(inputValue);
      // Clear input field
      setInputValue("");
    }
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
        {errorMessage && <p className="error-message">{errorMessage}</p>}
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
