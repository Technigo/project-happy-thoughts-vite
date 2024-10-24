import { useState, useEffect } from "react";
import { ThoughtForm } from "./components/ThoughtForm";
import { ThoughtList } from "./components/ThoughtList";
import { fetchThoughts, postThought, likeThought } from "./api"; // Import API functions

export const App = () => {
  const [thoughts, setThoughts] = useState([]);

  // Fetch thoughts when the component mounts
  useEffect(() => {
    const loadThoughts = async () => {
      try {
        const thoughtsData = await fetchThoughts(); // Fetch thoughts from API
        setThoughts(thoughtsData); // Update state with fetched thoughts
      } catch (error) {
        console.error("Error fetching thoughts:", error); // Handle any errors
      }
    };

    loadThoughts(); // Call the function to fetch thoughts
  }, []); // Empty dependency array means this only runs once

  // Handle form submission (new thought)
  const handleFormSubmit = async (newMessage) => {
    const newThought = {
      _id: Math.random().toString(36).substring(2, 9), // Temporary ID
      message: newMessage,
      hearts: 0,
      createdAt: new Date().toISOString(),
    };

    // Optimistically add the new thought to the state
    setThoughts((prevThoughts) => [newThought, ...prevThoughts]);

    try {
      const createdThoughtFromServer = await postThought(newMessage); // Post thought to server
      // Replace temp thought with real one from server
      setThoughts((prevThoughts) =>
        prevThoughts.map((thought) =>
          thought._id === newThought._id ? createdThoughtFromServer : thought
        )
      );
    } catch (error) {
      console.error("Error posting the new thought:", error);
      // If error, remove the optimistic thought from state
      setThoughts((prevThoughts) =>
        prevThoughts.filter((thought) => thought._id !== newThought._id)
      );
    }
  };

  // Handle liking a thought
  const handleLike = async (thoughtId) => {
    try {
      const updatedThought = await likeThought(thoughtId); // Like thought via API
      setThoughts((prevThoughts) =>
        prevThoughts.map((thought) =>
          thought._id === updatedThought._id ? updatedThought : thought
        )
      );
    } catch (error) {
      console.error("Error liking the thought:", error);
    }
  };

  return (
    <div>
      <ThoughtForm onFormSubmit={handleFormSubmit} />
      <ThoughtList thoughts={thoughts} onLike={handleLike} />
    </div>
  );
};
