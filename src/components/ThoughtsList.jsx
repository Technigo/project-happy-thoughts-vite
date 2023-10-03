import React, { useState, useEffect } from 'react';
import Thought from './Thought'; // Importera Thought-komponenten

const ThoughtsList = () => {
    const [thoughts, setThoughts] = useState([]);

    useEffect(() => {
        // Skapa en funktion för att hämta tankarna
        const fetchThoughts = async () => {
            try {
                const response = await fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts');
                const data = await response.json();
                // Uppdatera state med de hämtade tankarna
                setThoughts(data);
            } catch (error) {
                console.error('Error fetching thoughts:', error);
            }
        };

        // Anropa funktionen för att hämta tankarna
        fetchThoughts();
    }, []); // Använd en tom array som beroende för att detta bara ska köras vid montering

    return (
        <div>
            {thoughts.map((thought) => (
                <Thought key={thought._id} thought={thought} />
            ))}
        </div>
    );
};

export default ThoughtsList;
