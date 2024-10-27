import React, { useState, useEffect } from 'react';
import ThoughtsList from './components/ThoughtsList';
import ThoughtForm from './components/ThoughtForm';

function App() {
  const [thoughts, setThoughts] = useState([]);

  useEffect(() => {
    const fetchThoughts = async () => {
      const response = await fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts');
      const data = await response.json();
      const sortedThoughts = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setThoughts(sortedThoughts);
    };

    fetchThoughts();
  }, []);

  const addNewThought = (newThought) => {
    setThoughts([newThought, ...thoughts]);
  };

  
  const handleLike = async (thoughtId) => {
    try {
      const response = await fetch(
        `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thoughtId}/like`,
        {
          method: 'POST',
        }
      );

      if (response.ok) {
        setThoughts((prevThoughts) =>
          prevThoughts.map((thought) =>
            thought._id === thoughtId ? { ...thought, hearts: thought.hearts + 1 } : thought
          )
        );
      } else {
        console.error('Failed to like the thought');
      }
    } catch (error) {
      console.error('Error:', error);
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
