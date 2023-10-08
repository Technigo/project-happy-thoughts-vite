import React, { useState, useEffect } from 'react';
import Thought from './Thought';

const ThoughtsList = () => {
    const [thoughts, setThoughts] = useState([]);

    useEffect(() => {
        // A function to collect the thoughts 
        const fetchThoughts = async () => {
            try {
                const response = await fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts');
                const data = await response.json();
                // Update state with the collected thoughts 
                setThoughts(data);
            } catch (error) {
                console.error('Error fetching thoughts:', error);
            }
        };

        // Fetch the function to collect the thoughts 
        fetchThoughts();
    }, []); // Empty array

    return (
        <div>
            {thoughts.map((thought) => (
                <Thought key={thought._id} thought={thought} />
            ))}
        </div>
    );
};

export default ThoughtsList;
