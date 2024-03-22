import PropTypes from "prop-types";

const ThoughtsForm = ({ newThought, onFormSubmit, onNewThoughtChange }) => {



  return (
    <section className="form-container">
      <form className="thoughts-form" onSubmit={onFormSubmit}>
        <label className="input-label">
          <p>What&apos;s making you happy right now?</p>
        </label>

        <textarea
          className="input-field"
          value={newThought}
          onChange={onNewThoughtChange}
          placeholder="Happy thoughts here..."
        />
        <button className="submit-button" type="submit">
          ❤️ Send Happy Thought ❤️
        </button>
      </form>
    </section>
  );
};

export default ThoughtsForm;

ThoughtsForm.propTypes = {
  newThought: PropTypes.string.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  onNewThoughtChange: PropTypes.func.isRequired,
};
