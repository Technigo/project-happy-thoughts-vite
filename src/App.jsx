import React, { useState, useEffect } from "react";
import { NewThought } from "./components/NewThought";
import { ThoughtsList } from "./components/ThoughtsList";
import { SingleThought } from "./components/SingleThought";


export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [loading, setLoading] = useState(true);
  const messageAPI = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";
  
  const fetchData = async () => {
    setLoading(true);
    try {
        const response = await fetch(messageAPI);
        const data = await response.json();
        console.log('Data from API:', data);
        if (Array.isArray(data.data) && data.data.length > 0 && data.data[0].attributes.body) {
          let cleanData = data.data.map(thought => thought.attributes.body).reverse();
          setThoughts(cleanData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
  
    const handleThoughtSubmit = async (newThought) => {
      try {
        const response = await fetch(messageAPI, {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ body: newThought })
        });

        if (response.ok) {
          setThoughts(prevThoughts => [newThought, ...prevThoughts]);
          } else {
            console.error('Failed to post thought to the API');
          }
        } catch (error) {
          console.error('Error posting thought:', error);
        }
        };


    useEffect(() => {
      fetchData();
    }, []);
        
    
    return (
      <div className="App">
      <NewThought onThoughtSubmit={handleThoughtSubmit} />
      <ThoughtsList thoughts={thoughts} />
    </div>
    );
};

export default App;