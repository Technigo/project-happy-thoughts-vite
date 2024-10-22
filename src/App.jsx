import React, { useEffect, useState } from "react";
import "./index.css";
import "./components/styleForm.css";

// Use the correct API URL to fetch thoughts
const API_URL = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

export const App = () => {
  // Step 1: State to store fetched thoughts
  const [thoughts, setThoughts] = useState([]);

  // Step 2: Fetch thoughts when the component mounts
  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setThoughts(data); // Store the fetched thoughts in state
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []); // The empty array ensures this only runs once on component mount

  return (
    <div className="app">
      <h1>Happy Thoughts</h1>

      {/* Step 3: Render the list of thoughts */}
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
