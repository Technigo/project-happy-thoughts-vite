const ThoughtsForm = () => {
  return (
    // ---- submit form wrapper -----
    <section className="form-container">
      <form>
        <label className="input-label">
          <p>What&apos;s making you happy right now?</p>
        </label>
        <textarea 
          className="input-field"
          id="form-input"
          value=""
          placeholder="Happy thoughts here..."
          />
          <button className="submit-button" type="submit">
          ❤️ Send Happy Thought ❤️
          </button>
      </form>
    </section>
    // What's making you happy right now?

    // input field

    // submit button

    // ------------------------------
  );
};

export default ThoughtsForm;
