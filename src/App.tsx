import React, { useEffect, useState } from "react";
import ThoughtForm from "./components/ThoughtForm";
import ThoughtList from "./components/ThoughtList";
import "./index.css";
import "./components/styleForm.css";

const API_URL = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

// Define the structure of a thought
interface Thought {
  _id: string;
  message: string;
  hearts: number;
  createdAt: string;
}

export const App: React.FC = () => {
  const [thoughts, setThoughts] = useState<Thought[]>([]); // Array of thoughts
  const [error, setError] = useState<string>(""); // Error message

  // Fetch thoughts from the API on component mount
  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data: Thought[]) => setThoughts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Handle new thought submission
  const handleNewThought = (newThought: Thought) => {
    setThoughts([newThought, ...thoughts]);
  };

  // Handle like button click
  const handleLikeClick = (thoughtId: string) => {
    const likeUrl = `${API_URL}/${thoughtId}/like`;

    fetch(likeUrl, { method: "POST" })
      .then((response) => response.json())
      .then((updatedThought: Thought) => {
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
