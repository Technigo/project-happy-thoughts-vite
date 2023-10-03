import React, { useState, useEffect } from 'react';
import ThoughtList from './components/ThoughtList';
import ThoughtForm from './components/ThoughtForm';
import Thought from './components/Thought';
import useForm from './components/UseForm'; 

const apiKey = '20231002172134';

function App() {
  const [thoughts, setThoughts] = useState([]);
  const { handleSubmit, status, message } = useForm({ additionalData: {} });
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts');
      if (response.ok) {
        const data = await response.json();
  
        // Reverse the data to process from the most recent thoughts first
        const reversedData = data.reverse();
        
        // Create a map to track unique messages and their corresponding thought objects
        const uniqueMessagesMap = new Map();
        const uniqueThoughts = [];
  
        for (const thought of reversedData) {
          if (!uniqueMessagesMap.has(thought.message)) {
            uniqueMessagesMap.set(thought.message, thought);
          }
        }
  
        // Convert the map values (unique thoughts) back to an array
        uniqueThoughts.push(...uniqueMessagesMap.values());
  
        // Keep only the latest 20 unique thoughts
        const latestUniqueThoughts = uniqueThoughts.slice(0, 20);
  
        setThoughts(latestUniqueThoughts.reverse());
      } else {
        console.error('Failed to fetch thoughts:', response.status);
      }
    } catch (error) {
      console.error('Error fetching thoughts:', error);
    } finally {
      setLoading(false);
    }
  };
  

  useEffect(() => {
    fetchData();
  }, []);

  const handleNewThought = async (thoughtData) => {
    try {
      const response = await fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify(thoughtData),
      });

      if (response.ok) {
        const newThought = await response.json();
        setThoughts((previousThoughts) => [newThought, ...previousThoughts]);
      } else {
        console.error('Failed to add new thought:', response.status);
      }
    } catch (error) {
      console.error('Error adding new thought:', error);
    }
  };

  return (
    <div className="App">
      <ThoughtForm
        onNewThought={handleNewThought}
        handleSubmit={handleSubmit}
        status={status}
        message={message}
      />
      {thoughts.map((thought) => (
        <Thought key={thought._id} thought={thought} />
      ))}
    </div>
  );
  
}

export default App;










