import React, { useState } from 'react';
import { ThoughtList } from '../src/assets/components/ThoughtList';
import { ThoughtForm } from '../src/assets/components/ThoughtForm';

function App() {
  const [thoughts, setThoughts] = useState([]);

  const onThoughtSubmit = (newThought) => {
    setThoughts([newThought, ...thoughts]);
  };

  const onLike = (thoughtId) => {
    // Update the likes for the thought in the thoughts state
    setThoughts((prevThoughts) =>
      prevThoughts.map((thought) =>
        thought._id === thoughtId
          ? { ...thought, hearts: thought.hearts + 1 }
          : thought
      )
    );
  };

  return (
    <div className="App">
      <h1>Happy Thoughts</h1>
      <ThoughtForm onThoughtSubmit={onThoughtSubmit} />
      <ThoughtList thoughts={thoughts} onLike={onLike} />
    </div>
  );
}

export default App;
