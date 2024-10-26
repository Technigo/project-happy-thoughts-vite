import React, { useState, useEffect } from 'react';
import ThoughtList from './components/ThoughtList';
import ThoughtForm from './components/ThoughtForm';
import "./app.css";

const App = () => {
  const [thoughts, setThoughts] = useState([]);

  // Fetch thoughts from the API
  useEffect(() => {
    fetchThoughts();
  }, []);

  const fetchThoughts = () => {
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts')
      .then((res) => res.json())
      .then((data) => setThoughts(data));
  };

  return (
    <div>
      <ThoughtForm setThoughts={setThoughts} />
      <ThoughtList thoughts={thoughts} setThoughts={setThoughts} />
    </div>
  );
};

export default App;
