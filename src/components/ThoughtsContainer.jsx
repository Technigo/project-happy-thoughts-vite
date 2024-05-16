import { useEffect, useState } from "react";

import { Form } from "./Form";
import { RecentThoughts } from "./RecentThoughts";

import "./ThoughtsContainer.css";

//Define RecentThoughts API endpoint
const API_URL = "https://happy-thoughts-api-q1ab.onrender.com/thoughts";

/* Old API_URL "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts"; */

export const ThoughtsContainer = () => {
  const [thoughts, setThoughts] = useState([]);
  const [loading, setLoading] = useState(false); // State for handling loading
  const [error, setError] = useState(null); // State for holding error-message
  const [newThought, setNewThought] = useState("");
  const [likes, setLikes] = useState({});

  const fetchThoughts = async () => {
    setLoading(true);
    setError(null); // Clear previous errors

    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("Error fetching thoughts");
      }
      const data = await response.json();
      setThoughts(data.response);
    } catch (error) {
      console.error("Error fetching recent thoughts:", error);
      setError("Error fetching thoughts. Please try again later.");
    } finally {
      // Timeout to ensure the the loading is visible for a little longer
      setTimeout(() => {
        setLoading(false);
      }, 1000); // duration of 1.5 second
    }
  };

  useEffect(() => {
    // Fetch thoughts when component mounts
    fetchThoughts();
  }, []);

  // Add the new thought to the list of thoughts with help of spread-operator(...) & make sure it doesn't exceed 20
  const handleNewThought = (newThought) => {
    setThoughts([newThought, ...thoughts]);
  };

  const handleSubmit = async (event) => {
    //adding preventDefault to not have the page refreshing
    event.preventDefault();
    if (newThought.length < 5 || newThought.length > 140) {
      alert("Message must be between 5 and 140 characters long");
      return;
    }

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: newThought }),
      });

      if (!response.ok) {
        throw new Error("Failed to add new thought");
      }

      const data = await response.json();
      handleNewThought(data.response); // Update thoughts state with new thought
      setNewThought(""); // Clear form input after successful submission
      setError(""); // Clear any previous error message
    } catch (error) {
      console.error("Error adding new thought:", error);
      setError("Failed to add new thought. Please try again later");
    }
  };

  const handleNewThoughtChange = (event) => {
    setNewThought(event.target.value);
  };

  // Function to handle incrementing likes
  const handleLike = async (thoughtId) => {
    try {
      const response = await fetch(`${API_URL}/${thoughtId}/like`, {
        method: "POST",
      });

      if (!response.ok) {
        throw new Error("Failed to like thought");
      }

      const data = await response.json();

      // Create a copy of likes object to update specific thought's likes
      const updatedLikes = { ...likes };
      updatedLikes[thoughtId] = data.response.hearts; // Update likes count from API response
      setLikes(updatedLikes); // Update likes state
    } catch (error) {
      console.error("Error liking thought", error);
    }
  };

  return (
    // render the components passing props
    <div className="thoughts-container">
      <h1> Happy Thoughts </h1>
      <Form
        newThought={newThought}
        handleSubmit={handleSubmit}
        handleInputChange={handleNewThoughtChange}
      />
      {/* Render error message */}
      {error && <div className="error-message">{error}</div>}
      {/* Render loading indicator */}
      {loading && <h2 className="loading">Loading...</h2>}
      <RecentThoughts
        thoughts={thoughts}
        likes={likes}
        handleLike={handleLike}
      />
    </div>
  );
};
