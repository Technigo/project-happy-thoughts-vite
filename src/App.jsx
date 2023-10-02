import React, { useState, useEffect } from 'react';
import ThoughtList from './components/ThoughtList';
import ThoughtForm from './components/ThoughtForm';
import Thought from './components/Thought';
import './index.css';

function App() {
  const [thoughts, setThoughts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts');
      if (response.ok) {
        const data = await response.json();
        setThoughts(data);
      } else {
        console.error('Failed to fetch thoughts:', response.status);
      }
    } catch (error) {
      console.error('Error fetching thoughts:', error);
    }
  };

  useEffect(() => {
    fetchData(); // Fetch initial thoughts when the component mounts
  }, []);

  const handleNewThought = async (thoughtData) => {
    try {
      const response = await fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(thoughtData),
      });
  
      if (response.ok) {
        const newThought = await response.json();

        setThoughts((previousThoughts) => [newThought, ...previousThoughts]);
      } else {
        console.error('Failed to add new thought:', response.status);
      }
    } catch (error) {
      console.error('Error adding new thought:', error);
    }
  };

  return (
    <div className="App">
      <ThoughtForm onNewThought={handleNewThought} />
      <ThoughtList thoughts={thoughts} />
      {thoughts.map((thought) => (
        <Thought key={thought._id} thought={thought} />
      ))}
    </div>
  );
}

export default App;








