export const PostThoughts = ({ postSubmit, newMessage, newThought }) => {
  const disableSubmit = newThought.length < 5 || newThought.length > 140;

  return (
    <div className="post-form">
      <form onSubmit={postSubmit}>
        <label className="input-field">
          What makes you happy right now?
          <input
            className="text-field"
            type="text"
            onChange={newMessage}
            value={newThought}
            placeholder="Write here..."
            required
          />
        </label>
        <button className="send-button" type="submit" disabled={disableSubmit}>
          ❤️ Send Happy Thought ❤️
        </button>
      </form>
    </div>
  );
};
