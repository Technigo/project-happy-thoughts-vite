import React, { useEffect, useState } from "react";
import ThoughtForm from "./components/ThoughtForm";
import ThoughtList from "./components/ThoughtList";
import "./index.css";
import "./components/styleForm.css";

const API_URL = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [newThought, setNewThought] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setThoughts(data))
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
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: newThought })
    })
      .then((response) => response.json())
      .then((data) => setThoughts([data, ...thoughts]))
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
      <ThoughtForm
        newThought={newThought}
        setNewThought={setNewThought}
        onSubmit={handleFormSubmit}
        error={error}
      />
      <ThoughtList thoughts={thoughts} onLike={handleLikeClick} />
    </div>
  );
};
