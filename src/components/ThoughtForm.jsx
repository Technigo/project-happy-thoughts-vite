import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./ThoughtForm.module.css";

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
    <form onSubmit={handleSubmit} className={styles.thoughtForm}>
      <p className={styles.thoughtQuestion}>
        What is making you happy right now?
      </p>
      <textarea
        className={styles.thoughtInput}
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        placeholder="Type here!"
      ></textarea>
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
