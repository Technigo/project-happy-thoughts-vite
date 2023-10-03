import "./PostWrapper.css";

export const PostWrapper = () => {
  return (
    <div className="main-wrapper">
      <h1>Project Happy Thoughts</h1>
      <h2>by Susanne Ekenheim</h2>

      <div className="post-wrapper">
        <h2>What is making you happy right now?</h2>
        <form>
          <textarea rows="5" placeholder="My happy thought..."></textarea>
          <div className="post-counter">0/140</div>
          <button className="submit-btn">Send Happy Thought</button>
        </form>
      </div>
    </div>
  );
};
