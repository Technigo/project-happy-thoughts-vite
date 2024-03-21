export const Form = ({ newThought, handleSubmit, handleInputChange }) => {
  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <label>
        What´s making you happy right now?
        <input
          type="text"
          value={newThought}
          onChange={handleInputChange}
          placeholder="Type your happy thought.."
        />
      </label>
      <button className="submit-button" type="submit">
        {" "}
        💗 Send Happy Thought 💗{" "}
      </button>
    </form>
  );
};
