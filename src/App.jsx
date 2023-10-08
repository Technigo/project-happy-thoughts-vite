import React, { useState, useEffect } from 'react';
import ThoughtsList from './components/ThoughtsList';
import ThoughtForm from './components/ThoughtForm';
import './index.css';

const App = () => {
  const [thoughts, setThoughts] = useState([]);

  // Function to retrieve the thoughts when a new thought has been added
  const fetchThoughts = async () => {
    try {
      const response = await fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts');
      const data = await response.json();
      setThoughts(data);
    } catch (error) {
      console.error('Error fetching thoughts:', error);
    }
  };

  useEffect(() => {
    // Fetch the thoughts when the component is first rendered
    fetchThoughts();
  }, []);

  // Callback function that is called when a new thought has been added
  const handleThoughtSubmit = () => {
    // Re-fetch recent thoughts after a new thought is added
    fetchThoughts();
  };

  return (
    <div className="app">
      <h1>Happy Thoughts</h1>
      <ThoughtForm onThoughtSubmit={handleThoughtSubmit} />
      <ThoughtsList thoughts={thoughts} />
      <p>Technigo @ <a href="https://github.com/lisawh0" target="_blanc">Lisa Dahlkar</a></p>
    </div>
  );
}

export default App;
