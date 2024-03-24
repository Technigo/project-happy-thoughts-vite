export const HappyThoughtForm = ({
  onFormSubmit,
  newThought,
  onNewThoughtChange,
}) => {
  const disableSubmit = newThought.length < 6 || newThought.length > 140;

  return (
    <form className="form-wrapper" onSubmit={onFormSubmit}>
      <label>
        <h3>What's making you happy right now?</h3>

        <textarea
          className="thought-input"
          value={newThought}
          onChange={onNewThoughtChange}
          placeholder="Write a happy thought here..."
          required
        />
      </label>

      <button
        type="submit"
        className="submit-thought"
        aria-label="button for submit thought"
        disabled={disableSubmit}
        required
      >
        ❤️ Send Happy Thought ❤️
      </button>
    </form>
  );
};
