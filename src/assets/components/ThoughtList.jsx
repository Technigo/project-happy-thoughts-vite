import React, { useState, useEffect } from 'react';
import { Thought } from './Thought';

export const ThoughtList = ({ onLike }) => {
  const [thoughts, setThoughts] = useState([]);
  const apiUrl = 'https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts';

  useEffect(() => {
    // Fetch recent thoughts when the component mounts
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setThoughts(data))
      .catch((error) => console.error('Error fetching thoughts:', error));
  }, []);

  return (
    <div>
      <h2>Recent Thoughts</h2>
      {thoughts.map((thought) => (
        <Thought key={thought._id} thought={thought} onLike={onLike} />
      ))}
    </div>
  );
};
