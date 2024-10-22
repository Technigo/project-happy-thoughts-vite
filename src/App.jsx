import { useState, useEffect } from "react";
import { ThoughtForm } from "./components/ThoughtForm";
import { ThoughtList } from "./components/ThoughtList";

export const App = () => {
  const [thoughts, setThoughts] = useState([]);

  // Fetch thoughts on initial render
  useEffect(() => {
    fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts")
      .then((res) => res.json())
      .then((data) => {
        const sortedThoughts = data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setThoughts(sortedThoughts);
      });
  }, []);

  const handleFormSubmit = (newMessage) => {
    // Create a new thought object to display it immediately in the UI
    const newThought = {
      _id: Math.random().toString(36).substring(2, 9), // Generate a temporary ID
      message: newMessage,
      hearts: 0,
      createdAt: new Date().toISOString(), // Current timestamp
    };

    // Optimistically add the new thought to the state
    setThoughts((prevThoughts) => [newThought, ...prevThoughts]);

    // Send the new thought to the server
    fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: newMessage }),
    })
      .then((res) => res.json())
      .then((createdThoughtFromServer) => {
        // Replace the optimistically added thought with the one from the server
        setThoughts((prevThoughts) =>
          prevThoughts.map((thought) =>
            thought._id === newThought._id ? createdThoughtFromServer : thought
          )
        );
      })
      .catch((error) => {
        console.error("Error posting the new thought:", error);
        // If there's an error, remove the optimistically added thought
        setThoughts((prevThoughts) =>
          prevThoughts.filter((thought) => thought._id !== newThought._id)
        );
      });
  };

  const handleLike = (thoughtId) => {
    fetch(
      `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thoughtId}/like`,
      {
        method: "POST",
      }
    )
      .then((res) => res.json())
      .then((updatedThought) => {
        // Update the state with the updated thought (with increased hearts)
        setThoughts((prevThoughts) =>
          prevThoughts.map((thought) =>
            thought._id === updatedThought._id ? updatedThought : thought
          )
        );
      })
      .catch((error) => console.error("Error liking the thought:", error));
  };

  return (
    <div>
      <ThoughtForm onFormSubmit={handleFormSubmit} />
      <ThoughtList thoughts={thoughts} onLike={handleLike} />{" "}
      {/* Pass the onLike function */}
    </div>
  );
};
