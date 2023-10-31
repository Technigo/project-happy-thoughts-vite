import React, { useState, useEffect } from "react";
import { ThoughtList } from "./Components/ThoughtList";
import { NewThought } from "./Components/NewThought"; 

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchThoughts = async () => {
    try {
      const response = await fetch(
        "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts"
      );
      if (response.ok) {
        const data = await response.json();
        setThoughts(data);
        setLoading(false);
      } else {
        console.error("Error fetching thoughts:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching thoughts:", error);
    }
  };

  const handleLikeThought = async (thoughtId) => {
    try {
      const response = await fetch(
        `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thoughtId}/like`,
        {
          method: "POST",
        }
      );

      if (response.ok) {
        // Refresh the thoughts list after a successful like
        fetchThoughts();
      } else {
        console.error("Error liking thought:", response.statusText);
      }
    } catch (error) {
      console.error("Error liking thought:", error);
    }
  };

  useEffect(() => {
    fetchThoughts();
  }, []);

  const handleNewThought = (newThoughtData) => {
    setThoughts([newThoughtData, ...thoughts]);
  };

  return (
    <div className="App">
      <NewThought onNewThought={handleNewThought} />
      {error && <p className="error-message">{error}</p>}
      <ThoughtList thoughts={thoughts} loading={loading} handleLikeThought={handleLikeThought} />
    </div>
  );
};
