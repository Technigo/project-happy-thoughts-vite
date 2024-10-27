import React, { useEffect, useState } from "react";
import "./index.css";
import "./components/styleForm.css";

// API URL for fetching and posting thoughts
const API_URL = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

export const App = () => {
  const [thoughts, setThoughts] = useState([]); // Stores the list of thoughts
  const [newThought, setNewThought] = useState(""); // Stores new thought input
  const [error, setError] = useState(""); // Error message for input validation
  const [likedThoughts, setLikedThoughts] = useState({}); // Tracks liked states

  // Fetch thoughts from API on component mount
  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setThoughts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Handle form submission for a new thought
  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Validate input length
    if (newThought.length < 5 || newThought.length > 140) {
      setError("Message must be between 5 and 140 characters.");
      return;
    }

    setError(""); // Clear previous errors

    // Post new thought to the API
    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: newThought }),
    })
      .then((response) => response.json())
      .then((data) => {
        setThoughts([data, ...thoughts]); // Add new thought to the list
        setNewThought(""); // Clear input field
      })
      .catch((error) => {
        console.error("Error posting thought:", error);
        setError("Failed to post the thought. Please try again.");
      });
  };

  // Handle like button click for a thought
  const handleLikeClick = (thoughtId) => {
    const likeUrl = `${API_URL}/${thoughtId}/like`;

    fetch(likeUrl, { method: "POST" })
      .then((response) => response.json())
      .then((updatedThought) => {
        // Update thought in the list
        setThoughts((prevThoughts) =>
          prevThoughts.map((thought) =>
            thought._id === updatedThought._id ? updatedThought : thought
          )
        );

        // Toggle liked state for the thought
        setLikedThoughts((prevLiked) => ({
          ...prevLiked,
          [thoughtId]: !prevLiked[thoughtId],
        }));
      })
      .catch((error) => console.error("Error liking thought:", error));
  };

  return (
    <div className="app">
      <h1>Happy Thoughts</h1>

      {/* Thought submission form */}
      <form className="thought-form" onSubmit={handleFormSubmit}>
        <span className="thought-prompt">What's making you happy right now?</span>
        
        <textarea
          value={newThought}
          onChange={(e) => setNewThought(e.target.value)}
          placeholder="Write your happy thought here..."
          rows="4"
          maxLength="140"
        />
        <button type="submit" aria-label="Send your happy thought">
          Send Happy Thought
        </button>
        {error && <p className="error-message">{error}</p>}
      </form>

      {/* Display list of thoughts */}
      <ul>
        {thoughts.map((thought) => (
          <li className="thought-item" key={thought._id}>
            <p className="thought-message">{thought.message}</p>
            <div className="thought-footer">
              <div className="thought-hearts">
                <button
                  className={`heart-button ${thought.hearts > 0 ? "liked" : ""}`}
                  onClick={() => handleLikeClick(thought._id)}
                  aria-label={`Like the thought: "${thought.message}". Currently has ${thought.hearts} likes`}
                >
                  ❤️
                </button>
                <span>x {thought.hearts}</span>
              </div>
              <small className="thought-date">
                {new Date(thought.createdAt).toLocaleString()}
              </small>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};