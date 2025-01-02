import React, { useState, useEffect } from 'react';
import ThoughtForm from './thoughtForm.jsx';
import ThoughtList from './ThoughtList.jsx';
import HappyIcon from './HappyIcon.jsx';

function App() {
  const [thoughts, setThoughts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch inicial de pensamientos
  useEffect(() => {
    setLoading(true);
    fetch(`${import.meta.env.VITE_API_URL}/thoughts`) // Actualización aquí
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

  // Agregar un nuevo pensamiento
  const addThought = (newThought) => {
    setThoughts((prevThoughts) => [newThought, ...prevThoughts]);
  };

  // Manejar los "likes"
  const handleLike = (id) => {
    fetch(`${import.meta.env.VITE_API_URL}/thoughts/${id}/like`, { // Actualización aquí
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
      <HappyIcon />
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


