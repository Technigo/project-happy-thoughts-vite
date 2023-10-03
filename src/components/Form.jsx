import "./Form.css";

export const Form = () => {
  return (
    <div className="form-container">
      <h1>What's making you happy right now?</h1>
      <form>
        <textarea
          rows="3"
          placeholder="Something that makes you happy right now..."
        ></textarea>
        <div className="post-lenght">
          <p className="error-message">Your message is too long 😔</p>
          <p className="message-lenght">0/140</p>
        </div>
        <button
          type="submit"
          className="submit-btn"
          aria-label="button for submiting your post"
        >
          <span>❤️</span>
          Send Happy Thought
          <span>❤️</span>
        </button>
      </form>
    </div>
  );
};
