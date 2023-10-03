import { useState, useEffect } from "react";
import { MessageList } from "./MessageList";
import Confetti from "react-confetti"; // Import the Confetti component
import { useWindowSize } from "react-use";
export const PostMessage = () => {
  const [thoughts, setThoughts] = useState([]); //initial state is array, update the whole array
  //Initialize the state is empty string
  const [newPost, setNewPost] = useState("");
  const [error, setError] = useState(""); //initial state for error message
  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize();
  const apiUrl = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";
  const fetchPosts = () => {
    // Fetch recent thoughts, this will return the latest 20 thoughts from API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((json) => setThoughts(json))
      .catch((err) => console.log(err)); // Handle any errors here
  };
  // useEffect hook here
  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    showConfetti &&
      setTimeout(() => {
        setShowConfetti(false);
      }, 5000);
  }, [showConfetti]);

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
    // console.log("New Post❤️", newPost); always console log and debug each step
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
        // Handle any errors here
        .catch((err) => console.log(err))
        .finally(() => {
          setNewPost(""); //clear new post
          setShowConfetti(true);
        });
    }
  };

  return (
    <>
      <div className="post-wrapper">
        {/* Form part */}
        <form onSubmit={handleFormSubmit}>
          {/* When user submit the form, the confetti will pop up on the screen */}
          {showConfetti && (
            <Confetti
              colors={["#f44336", "#795548", "#FFEB3B", "#FF9800"]}
              recycle={false}
              numberOfPieces={200}
              gravity={0.5}
              width={width}
              height={height}
            />
          )}
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
