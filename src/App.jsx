import { useState, useEffect } from 'react';
import ThoughtsList from './components/ThoughtsList';
import ThoughtForm from './components/ThoughtForm';

const API_URL = "https://project-happy-thoughts-api-lice.onrender.com";

function App() {
  const [thoughts, setThoughts] = useState([]);

  // 📌 Fetch latest thoughts from your backend
  useEffect(() => {
    const fetchThoughts = async () => {
      try {
        const response = await fetch(`${API_URL}/thoughts`);
        if (!response.ok) {
          throw new Error("Failed to fetch thoughts");
        }
        const data = await response.json();
        setThoughts(data); 
      } catch (error) {
        console.error("Error fetching thoughts:", error);
      }
    };

    fetchThoughts();
  }, []);

  // 📌 Add a new thought
  const addNewThought = async (newThought) => {
    try {
      const response = await fetch(`${API_URL}/thoughts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newThought),
      });

      if (!response.ok) {
        throw new Error("Failed to post new thought");
      }

      const createdThought = await response.json();
      setThoughts((prevThoughts) => [createdThought, ...prevThoughts]);
    } catch (error) {
      console.error("Error posting thought:", error);
    }
  };

  // 📌 Handle liking a thought
  const handleLike = async (thoughtId) => {
    try {
      const response = await fetch(`${API_URL}/thoughts/${thoughtId}/like`, {
        method: 'POST',
      });

      if (!response.ok) {
        throw new Error("Failed to like the thought");
      }

      // Optimistically update the like count
      setThoughts((prevThoughts) =>
        prevThoughts.map((thought) =>
          thought._id === thoughtId ? { ...thought, hearts: thought.hearts + 1 } : thought
        )
      );
    } catch (error) {
      console.error("Error liking thought:", error);
    }
  };

  return (
    <div className="App">
      <h1>Happy Thoughts</h1>
      <ThoughtForm onNewThought={addNewThought} />
      <ThoughtsList thoughts={thoughts} onLike={handleLike} />
    </div>
  );
}

export default App;
