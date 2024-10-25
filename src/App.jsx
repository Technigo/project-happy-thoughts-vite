import { useState, useEffect } from 'react';
import SubmitForm from './components/SubmitForm';
import { HappyThought } from './components/HappyThought';

const URL = 'https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts';

export const App = () => {
  const [thoughts, setThoughts] = useState([]);

  useEffect(() => {
    const fetchThoughts = async () => {
      try {
        const response = await fetch(URL);
        const result = await response.json();
        setThoughts(result); // Sets the array of 20 latest thoughts
      } catch (error) {
        console.error('Error fetching thoughts:', error);
      }
    };
    fetchThoughts();
  }, []);

  // Adds a new thought to the list
  const addThought = (newThought) => {
    setThoughts((prevThoughts) => [newThought, ...prevThoughts.slice(0, 19)]);
  };

  return (
    <div className="App">
      <h1>Happy Thoughts</h1>
      <SubmitForm onSubmit={addThought} />
      {thoughts.map((thought) => (
        <HappyThought key={thought._id} thought={thought.message} />
      ))}
    </div>
  );
};

export default App;
