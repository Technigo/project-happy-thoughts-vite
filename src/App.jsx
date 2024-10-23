// App.jsx

import './index.css';
import { ListThoughts } from "./components/ListThoughts";
import { SubmitThought } from './components/SubmitThought';
import { useState, useEffect } from 'react';

export const App = () => {
  const [thoughts, setThoughts] = useState([]);

  const handleNewThought = (newThought) => {
    setThoughts(prevThoughts => [newThought, ...prevThoughts]);
  };

  useEffect(() => {
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts')
      .then((res) => res.json())
      .then((json) => {
        setThoughts(json);
      });
  }, []); 

  return (
    <div className="app">  
      <div className="main-title-container">
        <h1>Project Happy Thoughts</h1>
        <p>Made by Jenny Andersén</p>
      </div>

      <div className="submit-thought-card">
        <SubmitThought onSubmit={handleNewThought} /> 
      </div>

      <div className="main-container">
        <ListThoughts thoughts={thoughts} /> 
      </div>
    </div>
  );
};