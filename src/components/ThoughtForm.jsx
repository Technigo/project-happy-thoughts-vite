import PropTypes from "prop-types";
import styles from "./ThoughtForm.module.css";

const ThoughtForm = ({ value, onSubmit, onChange }) => {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <p className={styles.title}>What&apos;s making you happy right now?</p>
      <label htmlFor="message"></label>
      <textarea
        className={styles.input}
        id="message"
        name="message"
        value={value}
        onChange={onChange}
        placeholder="Type your happy thought here!"
      />
      <p
        className={styles.wordcount}
        style={{ color: 140 - value.trim().length < 0 && "red" }}
      >
        You have typed {value.trim().length} letters,
        {140 - value.trim().length > 0
          ? ` you still have ${140 - value.trim().length} to go`
          : ` you exceed ${value.trim().length - 140} words`}
        .
      </p>
      <button className={styles.submit} type="submit">
        Send Happy Thought!
      </button>
    </form>
  );
};

export default ThoughtForm;

ThoughtForm.propTypes = {
  value: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
