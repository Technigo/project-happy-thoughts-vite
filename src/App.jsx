import { useEffect, useState } from 'react';
import { Thought } from './Thought/Thought';

export const App = () => {
  const [thoughts, updateThoughts] = useState([]);
  const handleFetchData = async () => {
    const response = await fetch(
      `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts`
    );
    const data = await response.json();
    console.log(data);
    updateThoughts(data);
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  return (
    <div>
      {thoughts.map(thought => (
        <Thought key={thought._id} {...thought} />
      ))}
    </div>
  );
};
