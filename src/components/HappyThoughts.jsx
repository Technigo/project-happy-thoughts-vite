import React, { useState, useEffect } from "react";

const HappyThoughts = () => {
  // State variables
  const [thoughts, setThoughts] = useState([]);
  const [newThought, setNewThought] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch thoughts on component mount
  useEffect(() => {
    const fetchThoughts = async () => {
      try {
        const response = await fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts");

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setThoughts(jsonData.slice(0, 20)); 
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchThoughts();
  }, []);

  // Handle like button click
  const handleLike = async (id) => {
    try {
      const response = await fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${id}/like`, {
        method: "POST"
      });
      if (!response.ok) {
        throw new Error("Failed to like the thought");
      }
      
      setThoughts((currentThoughts) => {
        return currentThoughts.map((thought) => {
          if (thought.id === id) {
            return {
              ...thought,
              hearts: thought.hearts + 1, 
            };
          }
          return thought;
        });
      });
      
      console.log(`Liked thought with id: ${id}`);
    } catch (error) {
      console.error("Error liking thought:", error);
    }
  };
   
  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newTimestamp = new Date().toISOString(); 
      
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: newThought, createdAt: newTimestamp })
      };
      
      const response = await fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts", requestOptions);
  
      if (!response.ok) {
        throw new Error("Failed to submit the thought");
      }
  
      const newThoughtData = await response.json();
  
      setThoughts([newThoughtData, ...thoughts]);
      setNewThought("");
    } catch (error) {
      setError(error.message || 'Failed to submit the thought');
    }
  };

  // Render loading state if loading
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Render error message if there's an error
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="happy-thoughts-container">
      <form onSubmit={handleSubmit}>
        <h3>What is making you happy today?</h3>
        <input
          type="text"
          value={newThought}
          onChange={(event) => setNewThought(event.target.value)}
          placeholder="React is making me happy..."
          className="thought-input"
        />
        <button type="submit" className="send-button">❤️Send happy thoughts❤️</button>
      </form>
      {thoughts.map((thought) => (
        <div key={thought.id} className="thought-card">
          <h2>{thought.message}</h2>
          <p className="created-at">Created at: {new Date(thought.createdAt).toLocaleString()}</p>
          <button onClick={() => handleLike(thought.id)} className="like-button">❤️</button>
          <span className="like-count">x {thought.hearts}</span>
        </div>
      ))}
    </div>
  );
};

export default HappyThoughts;
