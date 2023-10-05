import { useState, useEffect } from "react";

export const SendThought = ({ fetchPosts, postedThoughts }) => {
  // State to track the new post message and any error messages
  const [newPost, setNewPost] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const addNewPost = (newPost) => {
    setNewPost([newPost, ...postedThoughts]);
  };

  // useEffect to check the length of the new post message and set an error message if it's too long
  useEffect(() => {
    if (newPost.length >= 141) {
      setErrorMessage("Your message is too long, try to write it shorter");
    } else {
      // Clear the error message if the message length is within limits
      setErrorMessage("");
    }
  }, [newPost]);

  // Function to send a new thought when the "Send Happy Thought" button is clicked
  const postNewThought = async () => {
    try {
      // Check if the message is empty
      if (newPost.length === 0) {
        console.error("Message cannot be empty");
        return;
      }
      // Send a POST request to the API with the new post message
      const response = await fetch(
        `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts`,
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
        console.log(data);
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
    <div>
      <h2>What is making you happy right now?</h2>
      {/* Textarea for entering the new post message */}
      <textarea
        rows="3"
        placeholder="'If music be the food of love, play on.' - William Shakespeare"
        value={newPost}
        onChange={(e) => setNewPost(e.target.value)}
      ></textarea>
      {/* Button to send the new post */}
      <button type="submit" onClick={postNewThought}>
        ❤️ Send Happy Thought ❤️
      </button>
      {/* Error message display */}
      <p className="error-message">{errorMessage}</p>
    </div>
  );
};
