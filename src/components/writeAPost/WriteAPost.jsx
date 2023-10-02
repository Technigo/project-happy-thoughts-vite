import "./writeapost.css";
export const WriteAPost = () => {
  return (
    <div className="editor-container">
      <h1>Project Happy Thoughts</h1>
      {/* <input
        type="text"
        className="comment-box"
        placeholder="Share your heart and warm others with your glow"
      /> */}
      <textarea
        type="text"
        className="comment-box"
        placeholder="Share your heart and warm others with your glow"
      />
    </div>
  );
};
