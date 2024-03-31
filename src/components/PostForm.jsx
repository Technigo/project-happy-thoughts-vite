export const PostForm = ({
  newThought,
  onHandleNewThoughtChange,
  onFormSubmit,
}) => {
  return (
    <div id="submit-field">
      <form id="type-form" onSubmit={onFormSubmit}>
        <textarea
          value={newThought}
          onChange={onHandleNewThoughtChange}
          placeholder="enter a happy thought..."
        />
        <button id="submit-button" type="submit">
          Submit button
        </button>
      </form>
    </div>
  );
};
