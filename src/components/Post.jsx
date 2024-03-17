export const Post = () => {
  return (
    <section className="postContainer">
      <form>
        <label>
          <h2>What&#39;s making you happy right now?</h2>
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
        <button>Send Happy Thought</button>
      </form>
    </section>
  );
};
