export const PostForm = ({
  newThought,
  handleNewThoughtChange,
  onFormSubmit,
}) => {
  return (
    <form id="type-form" onSubmit={onFormSubmit}>
      <textarea
        value={newThought}
        onChange={handleNewThoughtChange}
        placeholder="enter a happy thought..."
      />
      <button id="submit-button" type="submit">
        Add happy thought
      </button>
    </form>
  );
};
