import React, { useState } from "react";
import PropTypes from "prop-types";
import "./MessageInput.css";

export const MessageInput = ({ sendMessage }) => {
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [charCount, setCharCount] = useState(0); // State to track character count

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

  const handleInputChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
    setCharCount(value.length); // Update character count
  };

  return (
    <div className="message-container">
      <form className="messageForm" onSubmit={handleSubmit}>
        <p>What's making you happy right now?</p>
        <input
          type="text"
          placeholder="Type your happy thought.."
          value={inputValue}
          onChange={handleInputChange}
        />
        <div className="char-count-container">
          <span className={charCount > 140 ? "char-count-error" : "char-count"}>
            {charCount}/140
          </span>
          {charCount > 140 && (
            <p className="char-count-error-message">
              Your thought is too long.
            </p>
          )}
        </div>
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
