import { useRef } from "react";

import { useThoughtStore } from "../stores/useThoughtStore";
import styles from "./ThoughtForm.module.css";

const ThoughtForm = () => {
  const { postThought, setError } = useThoughtStore();
  const inputRef = useRef("");
  const charCount = inputRef.current.value?.trim().length;

  // Post request on form submit, also validate the input
  const createThought = event => {
    event.preventDefault();
    const message = inputRef.current.value;
    if (message.trim().length >= 5 && message.trim().length <= 140) {
      postThought(message);
      inputRef.current.value = "";
    } else {
      setError("Input invalid: You must type within 5 to 140 words");
    }
  };
  return (
    <form className={styles.form} onSubmit={createThought}>
      <p className={styles.title}>What&apos;s making you happy right now?</p>
      <label htmlFor="message"></label>
      <textarea
        className={styles.input}
        id="message"
        name="message"
        ref={inputRef}
        onChange={() => setError()}
        placeholder="Type your happy thought here!"
      />
      <p
        className={styles.wordcount}
        style={{ color: 140 - charCount < 0 && "red" }}
      >
        You have typed {charCount} letters,
        {140 - charCount > 0
          ? ` you still have ${140 - charCount} to go`
          : ` you exceed ${charCount - 140} words`}
        .
      </p>
      <button className={styles.submit} type="submit">
        ❤️ Send Happy Thought! ❤️
      </button>
    </form>
  );
};

export default ThoughtForm;
