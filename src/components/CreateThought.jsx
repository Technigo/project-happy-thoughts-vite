import PropTypes from "prop-types";

const CreateThought = ({ value, onSubmit, onChange }) => {
  return (
    <form onSubmit={onSubmit}>
      <p>What&apos;s making you happy right now?</p>
      <label htmlFor="message"></label>
      <textarea id="message" name="message" value={value} onChange={onChange} />
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
