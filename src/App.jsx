// src/App.jsx
import React, { useState, useEffect } from 'react';
import ThoughtForm from './thoughtForm.jsx';
import ThoughtList from './ThoughtList.jsx';
import HappyIcon from './HappyIcon.jsx';

function App() {
  const [thoughts, setThoughts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch initial data function//Fetch inicial de pensamientos
  useEffect(() => {
    setLoading(true);
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts')
      .then((res) => res.json())
      .then((data) => {
        setThoughts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching thoughts:', error);
        setLoading(false);
      });
  }, []);

  // Add thought function//Función para agregar un nuevo pensamiento
  const addThought = (newThought) => {
    setThoughts((prevThoughts) => [newThought, ...prevThoughts]);
  };

  // Handle likes function//Función para manejar el "like"
  const handleLike = (id) => {
    fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${id}/like`, {
      method: 'POST',
    })
      .then((res) => res.json())
      .then(() => {
        setThoughts((prevThoughts) =>
          prevThoughts.map((thought) =>
            thought._id === id ? { ...thought, hearts: thought.hearts + 1 } : thought
          )
        );
      })
      .catch((error) => console.error('Error updating likes:', error));
  };

  return (
    <div className="App">
      <h1>Happy Thoughts</h1>
      <HappyIcon /> {/* Muestra el SVG */}
      <ThoughtForm addThought={addThought} />
      {loading ? (
        <p>Loading thoughts...</p>
      ) : (
        <ThoughtList thoughts={thoughts} onLike={handleLike} />
      )}
    </div>
  );
}

export default App;
