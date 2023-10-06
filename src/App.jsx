import React, { useState, useEffect } from "react";
import { NewThought } from "./components/NewThought";
import { ThoughtsList } from "./components/ThoughtsList";
import { SingleThought } from "./components/SingleThought";



export const App = () => {
  const [loading, setLoading] = useState(true);
  const [thoughts, setThoughts] = useState([]);
  const [apiThoughts, setApiThoughts] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const messageAPI = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

  
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(messageAPI);
      const data = await response.json();
      console.log('Data from API:', data);
      if (Array.isArray(data) && data.length > 0 && data[0]._id) {
        setThoughts(data);
      }
    } catch (error) {
      console.error('Error fetching thoughts', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  },[]);

  const handleThoughtSubmit = (newThought) => {
    if (newThought.length >= 141) {
      setErrorMessage("Your message is too long, it should only have max 140 characters");
    return;
    } else if (newThought.length <= 4) {
      setErrorMessage("Your message is too short, it needs at least 5 characters");
    return;
    } else {
      setErrorMessage("");
    fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts", {
        method: 'POST', 
        body: JSON.stringify({ message: newThought }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
   .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Failed to post thought to the API. Status: ${response.status}');
    }
  })
   .then((newThought) => {
    setThoughts((previousThoughts) => [newThought, ...previousThoughts]);
   })
  .catch ((error) => {
    console.error('Error posting thought:', error);
  });
}
};


    
    return (
      <div className="App">
      <NewThought onThoughtSubmit={handleThoughtSubmit} />
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <ThoughtsList thoughts={thoughts} />
    </div>
  );
};