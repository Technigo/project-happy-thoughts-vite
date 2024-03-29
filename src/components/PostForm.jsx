export const PostForm = ({
  newThought,
  handleNewThoughtChange,
  onFormSubmit,
}) => {
  return (
    <form onSubmit={onFormSubmit}>
      <h1>Happy thoughts</h1>
      <h2>enter a happy thought</h2>

      <textarea
        value={newThought}
        onChange={handleNewThoughtChange}
        placeholder="enter a happy thought..."
      />
      <button type="submit">Add happy thought</button>
    </form>
  );
};
