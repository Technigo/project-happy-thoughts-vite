import { useState, useEffect } from "react";
import { MessageList } from "./MessageList";
export const PostMessage = () => {
  //Initialize the state is empty string
  const [newPost, setNewPost] = useState("");
  const [error, setError] = useState(""); //initial state for error message
  const [thoughts, setThoughts] = useState([]);
  const apiUrl = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";
  const fetchPosts = () => {
    // Fetch recent thoughts, this will return the latest 20 thoughts from API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((json) => setThoughts(json))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    if (newPost.length >= 141) {
      setError("Your message is too long, please reset your message😞");
    } else {
      setError("");
    }
  }, [newPost]);
  // Handle form submit and update the new post thought
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // console.log("New Post❤️", newPost);
    if (newPost.length <= 4) {
      setError("Your message is too short, it needs at least 5 letters😞");
    } else {
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
          setThoughts((prevThoughts) => [json, ...prevThoughts]);
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setNewPost(""); //clear new post
        });
    }
  };

  return (
    <>
      <div className="post-wrapper">
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
      </div>
      <div className="list-wrapper">
        <MessageList thoughts={thoughts} setThoughts={setThoughts} />
      </div>
    </>
  );
};
