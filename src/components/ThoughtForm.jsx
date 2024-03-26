import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./ThoughtForm.module.css";

const ThoughtForm = ({ addThought }) => {
  const maxLength = 140;
  const minLength = 5;
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleTextChange = (event) => {
    setMessage(event.target.value);
    if (error) setError("");
  };

  const getWordCountText = () => {
    const typedLength = message.length;
    const remainingLength = maxLength - typedLength;

    let wordCountMessage;
    if (remainingLength >= 0) {
      wordCountMessage = `You have typed ${typedLength} letters, you still can type ${remainingLength} letters.`;
    } else {
      wordCountMessage = `You have typed too many letters. The limit is ${maxLength}.`;
    }
    return wordCountMessage;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    if (message.length === 0) {
      setError("Message cannot be empty.");
      return;
    }
    if (message.length < minLength) {
      setError(`Message must be at least ${minLength} characters long.`);
      return;
    }
    if (message.length > maxLength) {
      setError(`Message must be no more than ${maxLength} characters.`);
      return;
    }

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
    <form onSubmit={handleSubmit} className={styles.thoughtForm}>
      <p className={styles.thoughtQuestion}>
        What is making you happy right now?
      </p>
      <textarea
        className={styles.thoughtInput}
        id="message"
        value={message}
        onChange={handleTextChange}
        placeholder="Type here!"
      ></textarea>
      <div
        className={
          message.length > maxLength ? styles.wordCountOver : styles.wordCount
        }
      >
        {getWordCountText()}
      </div>
      <button type="submit" className={styles.thoughtSubmit}>
        ❤️ Send Happy Thought ❤️
      </button>
    </form>
  );
};

ThoughtForm.propTypes = {
  addThought: PropTypes.func.isRequired,
};

export default ThoughtForm;