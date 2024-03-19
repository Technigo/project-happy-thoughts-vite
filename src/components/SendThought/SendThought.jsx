// Import useState and useEffect hooks, as well as the CSS file for this component.
import { useState, useEffect } from "react";
import "./SendThought.css";

export const SendThought = ({ fetchPosts, postedThoughts }) => {
  // State to track the new post message and any error messages
  const [newPost, setNewPost] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  // Function to add a new post to the list of posted thoughts
  const addNewPost = (newPost) => {
    setNewPost([newPost, ...postedThoughts]);
  };

  // useEffect to check the length of the new post message and set an error message if it's too short or long
  useEffect(() => {
    if (newPost.length >= 141) {
      setErrorMessage("Your message is too long!");
    } else {
      // Clear the error message if the message length is within limits
      setErrorMessage("");
    }
  }, [newPost]);

  // Function to send a new thought when the "Send Happy Thought" button is clicked
  const postNewThought = async (event) => {
    event.preventDefault();
    try {
      // Check if the message is empty
      if (newPost.length === 0) {
        console.error("Message cannot be empty");
      } else if (newPost.length >= 1 && newPost.length <= 4) {
        setErrorMessage("Your message have to be at least five characters.");
        return;
      }
      // Send a POST request to the API with the new post message
      const response = await fetch(
        `https://happy-thoughts-api-e1uj.onrender.com/thoughts`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: `${newPost}` }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        addNewPost(data);
        // Clear the new post input field
        setNewPost("");
        // Fetch and update the list of posted thoughts
        fetchPosts();
      } else {
        console.error("Failed to post the message");
      }
    } catch (error) {
      console.error("Error while posting the message", error);
    }
  };

  return (
    <div className="send-thought">
      <h2>What is making you happy right now?</h2>
      {/* Textarea for entering the new post message */}
      <form onSubmit={postNewThought}>
        <textarea
          className="send-thought-input"
          rows="3"
          cols="50"
          placeholder="'If music be the food of love, play on.' - William Shakespeare"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        ></textarea>
        <div className="error-counter-wrapper">
          {/* Error message display */}
          <p className="error-message">{errorMessage}</p>
          {/* Displaying the character count of `newPost`, applying a "red" class if length is 141 or more */}
          <p className={`length ${newPost.length >= 141 ? "red" : ""}`}>
            {newPost.length}/140
          </p>
        </div>
        {/* Button to send the new post */}
        <div className="send-button-wrapper">
          <button type="submit" className="post-button">
            <span
              className="heart-emoji-post"
              aria-label="button to send the post"
            >
              ❤️ Send Happy Thought ❤️
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};
