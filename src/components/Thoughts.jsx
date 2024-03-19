import { useState, useEffect } from 'react';
import { ThoughtForm } from './ThoughtForm';

export const Thoughts = () => {
  const [thoughts, setThoughts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchThoughts = async () => {
    try {
      const response = await fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts")
      const data = await response.json()
      if (data) {
        console.log(data)
        setThoughts(data)
      }
    } catch (error) {
      console.error("Error fetching thoughts", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchThoughts();
  }, []);

  const handleAddThought = async () => {
    // define your logic for adding new thought here
    console.log("Adding new thought...")
    fetchThoughts()
  }


  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='wrapper'>
         <ThoughtForm onAddThought={handleAddThought} />
      {thoughts.map((thought, index) => (
        <div className='message' key={index}>{thought.message}</div>
      ))}
    </div>
  );
};

// this component fetches the thoughts from the API when it mounts using the 'useEffect' hook with an empty dependency array
//data is fetched and stored in the 'thoughts' state
//then the component renders each thought as a separate 'div'
//
