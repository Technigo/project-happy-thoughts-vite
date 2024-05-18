import PropTypes from "prop-types";
import "./ThoughtsForm.css";

const ThoughtsForm = ({ newThought, handleFormSubmit, onNewThoughtChange }) => {
  return (
    <form className="thoughts-form" onSubmit={handleFormSubmit}>
      <label className="input-label">
        <p>What&apos;s making you happy right now?</p>
        <textarea
          className="input-field"
          value={newThought}
          onChange={onNewThoughtChange}
          placeholder="Happy thoughts here..."
        />
      </label>
      <button className="submit-button" type="submit">
        ❤️ Send Happy Thought ❤️
      </button>
    </form>
  );
};

export default ThoughtsForm;

ThoughtsForm.propTypes = {
  newThought: PropTypes.string.isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
  onNewThoughtChange: PropTypes.func.isRequired,
};
