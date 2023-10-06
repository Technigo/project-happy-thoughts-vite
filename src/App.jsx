import { useState, useEffect } from 'react';
import { ThoughtList } from './components/ThoughtList/ThoughtList';
import { Header } from './components/Header/Header';
import { CreateThought } from './components/CreateThought/CreateThought';


export const App = () => {
  // State to store the list of thoughts
  const [thoughts, setThoughts] = useState([]);
  // State to handle any potential errors during fetch
  const [error, setError] = useState(null);

// Handler for when a new thought is added
  const handleNewThought = (newThought) => {
    setThoughts([newThought, ...thoughts]);
  };
  // Fetch all the thoughts when the component mounts
  const fetchThoughts = async () => {
    try {
      const response = await fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts');
      const data = await response.json();
      setThoughts(data);
    } catch (error) {
      console.error('Error fetching thoughts', error);
    }
  };

  // Fetch thoughts when component is mounted.
  useEffect(() => {
    fetchThoughts();
  }, []);

  return (
    <div className='main-wrapper'>
      <Header />
      <CreateThought onNewThought={handleNewThought} />
      <ThoughtList thoughts={thoughts} fetchThoughts={fetchThoughts} />
    </div>
  );
};