// PostForm.jsx

export const PostForm = () => {
  return (
    <form>
      <textarea
        type="text"
        name="thoughts"
        placeholder="Type your happy thought..."
        required
        className="custom-textarea" />
      <button className="add-post-btn" type="submit">❤️<p>Send happy thought</p>❤️</button>
    </form>
  );
};