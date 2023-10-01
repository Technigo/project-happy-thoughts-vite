import React, { useState, useEffect } from 'react';
import ThoughtList from './components/ThoughtList';
import ThoughtForm from './components/ThoughtForm';
import './index.css'

function App() {
  const [thoughts, setThoughts] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts';

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setThoughts(data);
      })
      .catch((error) => {
        console.error('Error fetching thoughts:', error);
      });
  }, []); // The empty array [] ensures this effect runs once when the component mounts

  const handleNewThought = async (newThought) => {
    // Add the new thought to the list of thoughts
    setThoughts([newThought, ...thoughts]);
  };

  return (
    <div>
      <h1>My Happy Thoughts</h1>
      <ThoughtForm onNewThought={handleNewThought} />
      <ThoughtList thoughts={thoughts} />
    </div>
  );
}

export default App;


