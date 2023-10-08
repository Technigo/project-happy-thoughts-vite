import React from 'react';
import { useState, useEffect } from 'react';
import { Thought } from '../Thought/Thought';

// import style from './Thought.module.css';

export const ThoughtList = () => {
  // State to store the list of thoughts
  const [thoughts, setThoughts] = useState([]);

  // Fetch recent thoughts on component load
  useEffect(() => {
    // Define the fetchThoughts function
    const fetchThoughts = async () => {
      try {
        const response = await fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts");
        if (response.ok) {
          const data = await response.json();
          setThoughts(data);
        } else {
          console.error('Failed to fetch thoughts');
        }
      } catch (error) {
        console.error('Error fetching thoughts:', error);
      }
    };

    // Call the fetchThoughts function to fetch thoughts
    fetchThoughts();
  }, []);

  return (
    <div>
      {/* Map through the thoughts array and render individual Thought components */}
      {thoughts.map((thought) => (

        // Pass the thought object as a prop to the Thought component
         <Thought key={thought._id} thought={thought} />
      ))}
    </div>
  );
};
