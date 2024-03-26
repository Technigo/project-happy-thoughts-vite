import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./ThoughtForm.module.css";

const ThoughtForm = ({ addThought }) => {
  const maxLength = 140;
  const [message, setMessage] = useState("");

  const handleTextChange = (event) => {
    setMessage(event.target.value);
  };

  const getWordCountText = () => {
    const typedLength = message.length;
    const remainingLength = maxLength - typedLength;

    let wordCountMessage;
    if (remainingLength >= 0) {
      wordCountMessage = `You have typed ${typedLength} letters, you still have ${remainingLength} to go.`;
    } else {
      wordCountMessage = `You have typed too many letters. The limit is ${maxLength}.`;
    }
    return wordCountMessage;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (message.length > maxLength) {
      console.error("Maximum ");
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