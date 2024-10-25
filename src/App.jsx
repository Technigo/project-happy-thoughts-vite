import { useState, useEffect } from "react";
import { ThoughtForm } from "./components/ThoughtForm";
import { ThoughtList } from "./components/ThoughtList";
import { fetchThoughts, postThought, likeThought } from "../api"; // Import API functions

export const App = () => {
  // "thoughts" is the state that stores the list of thoughts, initially set as an empty array.
  // "setThoughts" is the function used to update the state.
  const [thoughts, setThoughts] = useState([]);

  // Fetch thoughts when the component mounts
  useEffect(() => {
    const loadThoughts = async () => {
      try {
        // Fetch thoughts from API
        const thoughtsData = await fetchThoughts();
        // Update state with fetched thoughts
        setThoughts(thoughtsData);
      } catch (error) {
        console.error("Error fetching thoughts:", error); // Handle any errors
      }
    };

    loadThoughts(); // Call the function to fetch thoughts when the component loads
  }, []); // Empty dependency array means this only runs once

  // Handles form submission (new thought)
  const handleFormSubmit = async (newMessage) => {
    // Create a new thought object with a temporary ID (before it gets stored on the server)
    const newThought = {
      _id: Math.random().toString(36).substring(2, 9), // Generates a random temporary ID for the new thought
      message: newMessage, // The actual user's text/message
      hearts: 0, // Initialize hearts (likes) to 0
      createdAt: new Date().toISOString(), // Sets the current date and time
    };

    // Optimistically add the new thought to the state so it appears immediately in the UI, before the server stores it in the database
    // 'Optimistic UI update'
    setThoughts((prevThoughts) => [newThought, ...prevThoughts]);

    try {
      // Post the new thought to the server (send it to the backend)
      const createdThoughtFromServer = await postThought(newMessage);
      // After receiving the response from the server,
      // replaces the temporary thought with the real one from the server (which has the correct ID)
      setThoughts((prevThoughts) =>
        prevThoughts.map((thought) =>
          thought._id === newThought._id ? createdThoughtFromServer : thought
        )
      );
    } catch (error) {
      // If error, remove the optimistic thought from state
      console.error("Error posting the new thought:", error);

      setThoughts((prevThoughts) =>
        prevThoughts.filter((thought) => thought._id !== newThought._id)
      );
    }
  };

  // handleLike is called when the user clicks the like (heart) button on a thought
  const handleLike = async (thoughtId) => {
    try {
      // Send a request to the server to "like" the thought by its ID
      const updatedThought = await likeThought(thoughtId); // Like thought via API
      // Update the state with the new heart count (received from the server)
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
    // A container div to wrap the form and the list
    <div>
      {/* Render the ThoughtForm component */}
      {/* Pass the handleFormSubmit function as a prop called 'onFormSubmit' */}
      {/* This allows ThoughtForm to call this function when a new thought is submitted */}
      <ThoughtForm onFormSubmit={handleFormSubmit} />
      {/* Render the ThoughtList component */}
      {/* Pass the array of thoughts and the handleLike function as props */}
      {/* 'thoughts' prop is an array that ThoughtList will use to display the list of thoughts */}
      {/* 'onLike' prop is a function that ThoughtList will use when the like button is clicked */}
      <ThoughtList thoughts={thoughts} onLike={handleLike} />
    </div>
  );
};
