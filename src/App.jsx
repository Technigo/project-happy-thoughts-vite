import { useEffect, useState } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Message } from "./components/Message";
import { NewPost } from "./components/NewPost";
import "./index.css";

export const App = () => {
  const [loading, setLoading] = useState(false); // State to track loading status
  const [thoughts, setThoughts] = useState([]); // State to store thoughts

  // Function to fetch thoughts from the API
  const fetchPosts = () => {
    setLoading(true); // Set loading to true while fetching
    fetch("https://project-happy-thoughts-api-vl6m.onrender.com/thoughts")
      .then((response) => response.json())
      .then((data) => {
        setLoading(false); // Set loading to false when data is received
        setThoughts(data); // Update thoughts state with the fetched data
      })
  }

  useEffect(() => {
    fetchPosts(); // Fetch thoughts when the component mounts
  }, [])

  // Function to add a new thought to the list
  const addNewThought = (newThought) => {
    setThoughts([newThought, ...thoughts]); // Add the new thought to the top of the list
  };

  // Function to handle liking a thought
  const handleLike = (thoughtId) => {
    // Send a "like" request to the server

    // After a successful like, update the state to reflect the new number of likes
    const updatedThoughts = thoughts.map((thought) => {
      if (thought._id === thoughtId) {
        return { ...thought, hearts: thought.hearts + 1 };
      }
      return thought;
    });

    setThoughts(updatedThoughts);
  };

  return (
    <>
      <div className="main-wrapper">
        <Header />
        <NewPost onNewThought={addNewThought} />
        {loading ? (
          <p>Loading...</p> /* Display a loading message when fetching */
        ) : (
          <Message thoughts={thoughts} onLike={handleLike} /> /* Render the Message component with thoughts and the like handler */
        )}
        <Footer />
      </div>
    </>
  )
};



