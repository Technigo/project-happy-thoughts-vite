import PropTypes from "prop-types";
import styles from "./ThoughtForm.module.css";

const ThoughtForm = ({ input, onSubmit, onChange }) => {
  const charCount = input.trim().length;
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <p className={styles.title}>What&apos;s making you happy right now?</p>
      <label htmlFor="message"></label>
      <textarea
        className={styles.input}
        id="message"
        name="message"
        value={input}
        onChange={onChange}
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

ThoughtForm.propTypes = {
  input: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
