import React, { useState, useEffect } from "react";
import { ThoughtList } from "./Components/ThoughtList";

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newThought, setNewThought] = useState("");
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

  const handleNewThoughtChange = (event) => {
    setNewThought(event.target.value);
  };

  const postNewThought = async () => {
    try {
      const response = await fetch(
        "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: newThought }),
        }
      );

      if (response.ok) {
        const newThoughtData = await response.json();
        setThoughts([newThoughtData, ...thoughts]);
        setNewThought("");
        setError(null);
      } else {
        const errorData = await response.json();
        setError(errorData.message);
      }
    } catch (error) {
      console.error("Error posting thought:", error);
      setError("An error occurred while posting your thought.");
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

  return (
    <div className="App">
      <div>
        <input
          type="text"
          value={newThought}
          onChange={handleNewThoughtChange}
          placeholder="Share your happy thought..."
        />
        <button onClick={postNewThought}>Post</button>
      </div>
      {error && <p className="error-message">{error}</p>}
      <ThoughtList thoughts={thoughts} loading={loading} handleLikeThought={handleLikeThought} />
    </div>
  );
};
