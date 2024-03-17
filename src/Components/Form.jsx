import './form.css'
export const Form = ({ thought, onNewThought, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <label>
        What<>&apos;</>s making you happy right now?
        <textarea
          rows="4"
          cols="50"
          value={thought}
          onChange={onNewThought}
          placeholder="Write some text..."
        />
      </label>
      <button type="submit" className="submitBtn">
        ❤️ Send Happy Thought ❤️
      </button>
    </form>
  )
}
