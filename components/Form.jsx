import "./Form.css"

export const Form = ({ onFormSubmit, newThought, onNewThoughtChange }) => {
  const disableSubmit = newThought.length < 6 || newThought.length > 140

  return (
    <form className="form-wrapper" onSubmit={onFormSubmit}>
      <label>
        <h3>Share a thought that makes you happy!</h3>

        <textarea
          className="thought-input"
          value={newThought}
          onChange={onNewThoughtChange}
          placeholder="Share your happy thought here..."
          required
        />
      </label>
      <button
        type="submit"
        className="submit-thought"
        aria-label="button to submit thought"
        disabled={disableSubmit}
        required
      >
        Send Happy Thought
      </button>
    </form>
  )
}
