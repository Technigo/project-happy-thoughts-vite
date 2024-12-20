import "./UpdateFeedBox.css"
import React, { useState } from "react";

const UpdateFeedBox = (props) => {
  const [happyThought, setHappyThought] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const URL = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

  const handleSubmitHappyThought = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null)

    if(happyThought.length < 5 || happyThought.length > 140) {
        setError("The post needs to be between 5 and 140 characters long.")
        setLoading(false)
        return;
    }

    try {
      // Perform the POST request
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Ensure the request is sent as JSON
        },
        body: JSON.stringify({
          message: happyThought, // The message being posted
        }),
      });

      // Check if the response is okay
      if (!response.ok) {
        throw new Error("Failed to post the happy thought");
      }

      // Clear the input field if the post was successful
      setHappyThought("");
    } catch (error) {
      console.error("Error:", error);
      // Uncomment if you want to display error messages
      // setError("Failed to post the happy thought. Please try again.");
    } finally {
      // Always stop loading after the request finishes
      setLoading(false);
    }
  };

  // Function to handle text input change
  const handleInputChange = (e) => {
    const value = e.target.value;
    setHappyThought(value);

    // Clear error if input becomes valid
    if (value.length >= 5 && value.length <= 140) {
      setError(null);
    }
  };


  return (
    <form className="update-feed-box" onSubmit={handleSubmitHappyThought}>
      <p className="uf-feed-text">What's making you happy right now?</p>
      <textarea
        type="text"
        value={happyThought}
        placeholder="React is making me happy!"
        onChange={handleInputChange} 
        min="5" 
        max="140"
        required
      />
      <p className="character-count">{happyThought.length}/140</p>

      <button type="submit" disabled={loading}>
        <span>❤️</span>
        {loading ? <span>Sending...</span> : <span>Send Happy Thought</span>}
        <span>❤️</span>
      </button>
    </form>
  );
};

export {UpdateFeedBox}