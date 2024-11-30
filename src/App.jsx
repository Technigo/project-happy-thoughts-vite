import React, { useEffect, useState } from "react";
import ThoughtForm from "./components/ThoughtForm";
import ThoughtList from "./components/ThoughtList";
import "./index.css";
import "./components/styleForm.css";

const API_URL = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [error, setError] = useState("");

  // Fetch thoughts from the API on component mount
  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setThoughts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Handle new thought submission
  const handleNewThought = (newThought) => {
    setThoughts([newThought, ...thoughts]);
  };

  // Handle like button click
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
      <ThoughtForm onNewThought={handleNewThought} setError={setError} />
      {error && <p className="error-message">{error}</p>}
      <ThoughtList thoughts={thoughts} onLike={handleLikeClick} />
    </div>
  );
};
