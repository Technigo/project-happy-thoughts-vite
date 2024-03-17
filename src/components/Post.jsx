export const Post = () => {
  return (
    <section className="postContainer">
      <form className="formContainer">
        <label>
          <p>What&#39;s making you happy right now?</p>
          <textarea
            type="text"
            id="post"
            rows="3"
            maxLength="140"
            // value={}
            // onChange={(e) => set????(e.target.value)}
            placeholder="A smile is the shortest distance between two people. - Victor Borge"
            required
          ></textarea>
        </label>
        <button className="sendButton">
          <span id="hearts">❤️</span>
          <p>Send Happy Thought </p>
          <span id="hearts">❤️</span>
        </button>
      </form>
    </section>
  );
};
