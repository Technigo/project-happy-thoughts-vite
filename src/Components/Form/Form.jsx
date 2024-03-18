import './form.css'
export const Form = ({ thought, onNewThought, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} netlify>
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
      <span
        className="wordCounter"
        style={
          thought.length < 6 || thought.length > 140
            ? { color: 'red' }
            : { color: 'green' }
        }
      >
        {thought.length}
      </span>
      <button
        type="submit"
        className="submitBtn"
        disabled={thought.length < 6 || thought.length > 140}
      >
        ❤️ Send Happy Thought ❤️
      </button>
    </form>
  )
}
