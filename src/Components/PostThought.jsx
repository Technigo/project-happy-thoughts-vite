import { useState, useEffect } from "react";

export const PostThought = ({ fetchPosts }) => {
  const [newPost, setNewPost] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (newPost.length >= 141) {
      setErrorMessage("Your message is too long 😓");
    } else {
      setErrorMessage("");
    }
  }, [newPost]);
  
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (newPost.length <= 4) {
      setErrorMessage("Your message is too short, it needs at least 5 characters...");
    } else {
      const options = {
        method: "POST", 
        body: JSON.stringify({ message: newPost }),
        headers: { "Content-Type": "application/json" },
      };

      await fetch(`${import.meta.env.VITE_APP_API_URL}/thoughts`, options)
        .then((response) => response.json()) 
        .then((data) => {
          setNewPost("");
          fetchPosts(); // This will refresh the posts displayed
        })
        .catch((error) => console.error("Failed to post new thought:", error));
    }
  };

  return (
    <div className="post-wrapper">
      <h2>What is making you happy right now?</h2>
      <form onSubmit={handleFormSubmit}>
        <textarea
          rows="3"
          cols="50"
          placeholder="'Every day brings new opportunities and reasons to smile. Embrace the beauty of today!'"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        />
        <div className="post-counter">
          <p className="error">{errorMessage}</p>
          <p className={`length ${newPost.length >= 141 ? "red" : ""}`}>
            {newPost.length}/140
          </p>
        </div>
        <button type="submit" id="submitPostBtn" aria-label="button for submitting your post">
          <span className="emoji" aria-label="heart emoji">❤️</span>
          Send Happy Thought
          <span className="emoji" aria-label="heart emoji">❤️</span>
        </button>
      </form>
    </div>
  );
};
