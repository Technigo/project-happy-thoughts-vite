import PropTypes from "prop-types";
import styles from "./CreateThought.module.css";

const CreateThought = ({ value, onSubmit, onChange }) => {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <p>What&apos;s making you happy right now?</p>
      <label htmlFor="message"></label>
      <textarea
        className={styles.input}
        id="message"
        name="message"
        value={value}
        onChange={onChange}
        placeholder="Type your happy thought here!"
      />
      <p>
        You have typed {value.length} word(s),
        {140 - value.length > 0
          ? `you still have ${140 - value.length} to go`
          : `you exceed ${value.length - 140} words`}
        .
      </p>
      <button className={styles.submit} type="submit">
        &#x2764;&#xfe0f; Send Happy Thought! &#x2764;&#xfe0f;
      </button>
    </form>
  );
};

export default CreateThought;

CreateThought.propTypes = {
  value: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
