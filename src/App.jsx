import React, { useState, useEffect } from 'react';
import ThoughtList from './components/ThoughtList';

function App() {
    const [thoughts, setThoughts] = useState([]);

    useEffect(() => {
        // Define the API endpoint URL
        const apiUrl = 'https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts';

        // Make a GET request to fetch recent thoughts
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                // Update the component's state with the fetched thoughts
                setThoughts(data);
            })
            .catch((error) => {
                console.error('Error fetching thoughts:', error);
            });
    }, []); // The empty array [] ensures this effect runs once when the component mounts

    return (
        <div>
            <h1>My Happy Thoughts</h1>
            <ThoughtList thoughts={thoughts} />
        </div>
    );
}

export default App;

