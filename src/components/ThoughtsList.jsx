import React, { useEffect, useState } from 'react';
import { SingleThought } from './SingleThought';

const ThoughtsList = () => {
  const [thoughts, setThoughts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchThoughts = async () => {
    // console.log("Fetching Thoughts!");
    try {
      const response = await fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts');
      if (!response.ok) {
        throw new Error('Network response not ok');
      }
      const data = await response.json();
  

      // console.log('Fetched thoughts:', data);
  

      data.forEach((thought, index) => {
        // console.log(`Thought ${index + 1} - createdAt:`, thought.createdAt);
      });
  
      setThoughts(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchThoughts();
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <ul>
        {thoughts.map((thought) => (
          <li key={thought._id}>
            <SingleThought message={thought} fetchThoughts={fetchThoughts} createdAt={thought.createdAt} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThoughtsList;
