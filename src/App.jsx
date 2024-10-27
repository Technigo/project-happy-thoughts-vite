import { useState, useEffect } from 'react';
import SubmitForm from './components/SubmitForm';
import { HappyThought } from './components/HappyThought';

const URL = 'https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts';

export const App = () => {
  const [thoughts, setThoughts] = useState([]);

  // Fetch the most recent thoughts
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

  // Like a thought
  const handleLike = async (thoughtId) => {
    const likeURL = `${URL}/${thoughtId}/like`;
    try {
      const response = await fetch(likeURL, {
        method: 'POST',
      })
      if (response.ok) {
        // Update hearts count for liked thought
        setThoughts((prevThoughts) =>
          prevThoughts.map((thought) =>
            thought._id === thoughtId ? { ...thought, hearts: thought.hearts + 1 } : thought
          )
        );
      }
    } catch (error) {
      console.error('Error liking the thought:', error);
    }
  };

  return (
    <div className="App">
      <h1>Happy Thoughts</h1>
      <div className="content">
        <SubmitForm onSubmit={addThought} />
        <div className="HappyThoughts">
          {thoughts.map((thought) => (
            <HappyThought key={thought._id} thought={thought} onLike={handleLike} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
