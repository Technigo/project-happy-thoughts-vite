import React, { useEffect, useState } from "react";
import "./index.css";
import "./components/styleForm.css";

// Use the correct API URLs
const API_URL = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [newThought, setNewThought] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setThoughts(data); // Store fetched thoughts
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (newThought.length < 5 || newThought.length > 140) {
      setError("Message must be between 5 and 140 characters.");
      return;
    }

    setError("");

    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: newThought }),
    })
      .then((response) => response.json())
      .then((data) => {
        setThoughts([data, ...thoughts]);
        setNewThought("");
      })
      .catch((error) => {
        console.error("Error posting thought:", error);
        setError("Failed to post the thought. Please try again.");
      });
  };

  const handleLikeClick = (thoughtId) => {
    const likeUrl = `${API_URL}/${thoughtId}/like`;

    fetch(likeUrl, { method: "POST" })
      .then((response) => response.json())
      .then((updatedThought) => {
        setThoughts((prevThoughts) =>
          prevThoughts.map((thought) =>
            thought._id === updatedThought._id ? updatedThought : thought
          )
        );
      })
      .catch((error) => console.error("Error liking thought:", error));
  };

  return (
    <div className="app">
      <h1>Happy Thoughts</h1>

      <form className="thought-form" onSubmit={handleFormSubmit}>
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

<ul>
  {thoughts.map((thought) => (
    <li className="thought-item" key={thought._id}>
      <p className="thought-message">{thought.message}</p>
      <div className="thought-hearts">
        <button
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
         </li>
        ))}
      </ul>
    </div>
  );
};
