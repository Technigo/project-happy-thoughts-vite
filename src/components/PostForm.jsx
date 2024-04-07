import "../components/postform.css";

export const PostForm = ({
  newThought,
  onHandleNewThoughtChange,
  onFormSubmit,
}) => {
  return (
    <div className="post-form">
      <p>What's making you happy right now?</p>
      <form className="type-form" onSubmit={onFormSubmit}>
        <textarea className="text-area"
          value={newThought}
          onChange={onHandleNewThoughtChange}
          placeholder="enter a happy thought..."
        />
        <button className="submit-button" type="submit">
          ❤️ Send Happy Thought ❤️
        </button>
      </form>
    </div>
  );
};
