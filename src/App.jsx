import React, { useEffect, useState } from "react";
import "./index.css";
import "./components/styleForm.css";

// Use the correct API URLs
const API_URL = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

export const App = () => {
  // Step 1: State to store fetched thoughts and form data
  const [thoughts, setThoughts] = useState([]);
  const [newThought, setNewThought] = useState("");
  const [error, setError] = useState("");

  // Fetch the recent thoughts when the component mounts
  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setThoughts(data); // Store fetched thoughts
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Step 2: Handle form submission to post a new thought
  const handleFormSubmit = (event) => {
    event.preventDefault();
    
    // Ensure the message is valid (between 5 and 140 characters)
    if (newThought.length < 5 || newThought.length > 140) {
      setError("Message must be between 5 and 140 characters.");
      return;
    }

    // Clear any previous errors
    setError("");

    // POST the new thought to the API
    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: newThought }), // Send the thought message
    })
      .then((response) => response.json())
      .then((data) => {
        // Add the new thought to the list of thoughts
        setThoughts([data, ...thoughts]); // Add the new thought at the top
        setNewThought(""); // Clear the form
      })
      .catch((error) => {
        console.error("Error posting thought:", error);
        setError("Failed to post the thought. Please try again.");
      });
  };

  return (
    <div className="app">
      <h1>Happy Thoughts</h1>

      {/* Step 3: Create the form to submit new thoughts */}
      <form onSubmit={handleFormSubmit}>
        <textarea
          value={newThought}
          onChange={(e) => setNewThought(e.target.value)}
          placeholder="Write your happy thought here..."
          rows="4"
          maxLength="140"
        />
        <button type="submit">Send Happy Thought</button>

        {/* Show an error if validation fails */}
        {error && <p className="error-message">{error}</p>}
      </form>

      {/* Step 4: Render the list of thoughts */}
      <ul>
        {thoughts.map((thought) => (
          <li key={thought._id}>
            <p>{thought.message}</p>
            <small>{new Date(thought.createdAt).toLocaleString()}</small>
            <p>❤️ {thought.hearts}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

