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
        // Assuming the API returns an array of thoughts
        setThoughts(jsonData.slice(0, 20)); // Displaying the first 20 thoughts
      } catch (error) {
        setError(error);
      }
    };
    fetchThoughts();
  }, []);

  const handleLike = async (id) => {
    try {
      // You would need to implement the logic to send a like to the API for the given thought id
      // For example, you could send a POST request to the API endpoint to like the thought
      console.log(`Liked thought with id: ${id}`);
    } catch (error) {
      console.error("Error liking thought:", error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // You would need to implement the logic to send the new thought to the API
      // For example, you could send a POST request to the API endpoint to add the new thought
      console.log("Submitting new thought:", newThought);
      const newTimestamp = new Date().toISOString(); // Get the current timestamp
      // After successfully submitting the thought, you can update the UI to display the new thought with the creation timestamp
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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newThought}
          onChange={(event) => setNewThought(event.target.value)}
          placeholder="Type your happy thought..."
        />
        <button type="submit">Send</button>
      </form>
      {thoughts.length > 0 ? (
        thoughts.map((thought) => (
          <div key={thought.id} style={{ marginBottom: "20px" }}>
            <p>{thought.message}</p>
            <p>Created at: {new Date(thought.createdAt).toLocaleString()}</p>
            <button onClick={() => handleLike(thought.id)}>Like</button>
            <span>Likes: {thought.hearts}</span>
          </div>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default HappyThoughts;
