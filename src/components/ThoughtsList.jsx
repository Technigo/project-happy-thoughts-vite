import React, { useEffect, useState } from 'react';
import { SingleThought } from './SingleThought';
import './ThoughtsList.css';

const ThoughtsList = ({ refreshKey }) => {
  const [thoughts, setThoughts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchThoughts = async () => {
    try {
      const response = await fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts');
      if (!response.ok) {
        throw new Error('Network response not ok');
      }
      const data = await response.json();
      setThoughts(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchThoughts();
  }, [refreshKey]);

  return (
    <div className='list-wrapper'>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <ul>
        {thoughts.map((thought) => (
          <li key={thought._id}>
            <SingleThought message={thought} fetchThoughts={fetchThoughts} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThoughtsList;
