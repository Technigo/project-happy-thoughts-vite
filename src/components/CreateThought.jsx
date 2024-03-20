import PropTypes from "prop-types";

const CreateThought = ({ value, onSubmit, onChange }) => {
  return (
    <form onSubmit={onSubmit}>
      <p>What&apos;s making you happy right now?</p>
      <label htmlFor="message"></label>
      <textarea
        id="message"
        name="message"
        value={value}
        onChange={onChange}
        placeholder="Type your happy thought here!"
      />
      <p>
        You have typed {value.length} word(s), you still have{" "}
        {140 - value.length} to go.
      </p>
      <button type="submit">Send Happy Thought!</button>
    </form>
  );
};

export default CreateThought;

CreateThought.propTypes = {
  value: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
