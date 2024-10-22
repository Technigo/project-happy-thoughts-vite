// PostForm.jsx

export const PostForm = () => {
  return (
    <form>
      <input type="text" name="thoughts" required />
      <button className="add-post-btn" type="submit">❤️<p>Send happy thought</p>❤️</button>
    </form>
  );
};