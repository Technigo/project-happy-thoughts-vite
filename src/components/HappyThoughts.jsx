import React, { useState, useEffect } from "react";

const HappyThoughts = () => {
  const [thoughts, setThoughts] = useState([]);
  const [newThought, setNewThought] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchThoughts = async () => {
      try {
        const response = await fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts");

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setThoughts(jsonData.slice(0, 20)); // Displaying the first 20 thoughts
      } catch (error) {
        setError(error);
      }
    };
    fetchThoughts();
  }, []);
  
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
              hearts: thought.hearts + 1, // Increment like count by 1 for the liked thought
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
   
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newTimestamp = new Date().toISOString(); // Get the current timestamp
      setThoughts([{ id: Date.now(), message: newThought, createdAt: newTimestamp, hearts: 0 }, ...thoughts]);
      setNewThought(""); // Clear the input field
    } catch (error) {
      console.error("Error submitting thought:", error);
    }
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="happy-thoughts-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newThought}
          onChange={(event) => setNewThought(event.target.value)}
          placeholder="Type your happy thought..."
          className="thought-input"
        />
        <button type="submit" className="send-button">Send</button>
      </form>
      {thoughts.length > 0 ? (
        thoughts.map((thought) => (
          <div key={thought.id} className="thought-card">
            <p>{thought.message}</p>
            <p className="created-at">Created at: {new Date(thought.createdAt).toLocaleString()}</p>
            <button onClick={() => handleLike(thought.id)} className="like-button">Like</button>
            <span className="like-count">Likes: {thought.hearts}</span>
          </div>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default HappyThoughts;
