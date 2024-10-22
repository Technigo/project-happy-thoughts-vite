import { useState, useEffect } from 'react';

import ThoughtsList from "./HappyT"
import MessageForm from "./Form"

const HappyThoughtsApp = () => {
  const [thoughts, setThoughts] = useState([]);

  useEffect(() => {
    // Fetch latest thoughts when the component mounts
    const fetchThoughts = async () => {
      try {
        const response = await fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts');
        if (!response.ok) {
          throw new Error('Failed to fetch thoughts');
        }
        const data = await response.json();
        setThoughts(data);
      } catch (err) {
        console.error('Error fetching thoughts:', err);
      }
    };

    fetchThoughts();
  }, []);

  // Add new thought to the list
  const addThought = (newThought) => {
    setThoughts([newThought, ...thoughts]);
  };

  return (
    <div>
      <h1>Happy Thoughts</h1>
      <MessageForm onThoughtAdded={addThought} />
      <ThoughtsList thoughts={thoughts} />
    </div>
  );
};

export default HappyThoughtsApp;