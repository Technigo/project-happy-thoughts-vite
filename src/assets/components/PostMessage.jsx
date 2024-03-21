import "./PostMessage.scss";
/**
 * Add form that takes a new thought at the top
 * (5 - 140 characters long message)
 */

export const PostMessage = () => {
  return (
    <div className="post-wrapper">
      <h2>Make a form that will take in a thought</h2>
      {/* change default behavior */}
      {/* event */}
      <form>
        <textarea
          rows="3"
          placeholder="'If music be the food of love, play on.' – William Shakespeare"
          width="454px"
          height="76"
        ></textarea>
        <div className="post-length">
          <p className="error">
            Your message is too short, it needs at least 5 letters 😔
          </p>
          <p className="length">0 / 140</p>
        </div>
        <button
          id="submitPostBtn"
          type="submit"
          aria-label="button for submitting your post"
        >
          <span className="emoji" aria-label="heart emoji">
            ❤️
          </span>
          Send Happy Thought
          <span className="emoji" aria-label="heart emoji">
            ❤️
          </span>
        </button>
      </form>
    </div>
  );
};
