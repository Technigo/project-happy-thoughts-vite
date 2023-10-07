import React, { useState, useEffect } from 'react';
import ThoughtsList from './components/ThoughtsList';
import ThoughtForm from './components/ThoughtForm';
import './index.css';

const App = () => {
  const [thoughts, setThoughts] = useState([]);

  // Funktion för att hämta tankarna när en ny tanke har lagts till
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
    // Hämta tankarna när komponenten först renderas
    fetchThoughts();
  }, []);

  // Callback-funktion som anropas när en ny tanke har lagts till
  const handleThoughtSubmit = () => {
    // Hämta de senaste tankarna igen efter att en ny tanke har lagts till
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
