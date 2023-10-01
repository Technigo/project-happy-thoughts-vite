import { useState, useEffect } from "react";
export const PostMessage = ({ fetchPosts }) => {
  //Initialize the state is empty string
  const [newPost, setNewPost] = useState("");
  const [error, setError] = useState(""); //initial state for error message
  useEffect(() => {
    if (newPost.length >= 141) {
      setError("Your message is too long, please reset your message😞");
    } else {
      setError("");
    }
  }, [newPost]);
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("New Post❤️", newPost);
    if (newPost.length <= 4) {
      setError("Your message is too short, it needs at least 5 letters😞");
      const options = {
        method: "POST",
        body: JSON.stringify({
          message: newPost,
        }),
        headers: { "Content-Type": "application/json" },
      };

      fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts", options)
        .then((res) => res.json())
        .then((json) => {
          fetchPosts(json);
        })
        .finally(() => {
          setNewPost("");
        });
    }
  };
  return (
    <>
      {/* Form part */}

      <form onSubmit={handleFormSubmit}>
        <h2>What is making you happy right now?</h2>
        {/* Text part  */}
        <textarea
          rows="3"
          placeholder="The feeling of accomplishment after completing a challenging task or achieving a long-sought goal."
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        ></textarea>
        {/* Control Post-length and Error Message */}
        <div className="post-length">
          <p className="error">{error}</p>

          <p className={`length ${newPost.length >= 140 ? "red" : ""}`}>
            {newPost.length}/140
          </p>
        </div>
        {/* Submit thoughts Button */}
        <button
          type="submit"
          id="submitPostBtn"
          aria-label="button for submitting your post"
        >
          <span className="emoji" aria-label="heart emoji">
            ❤️
          </span>
          Send Happy Thoughts
          <span className="emoji" aria-label="heart emoji">
            ❤️
          </span>
        </button>
      </form>
    </>
  );
};
