import React, { useState, useEffect } from "react";
import ThoughtList from "./components/ThoughtList";
import ThoughtForm from "./components/ThoughtForm";
import Header from "./components/Header";
import "./app.css";

// Main App component that manages thoughts and renders child components
const App = () => {
  // State to hold the list of thoughts
  const [thoughts, setThoughts] = useState([]);

  // Effect hook to fetch thoughts from the API when the component mounts
  useEffect(() => {
    fetchThoughts(); // Call the function to fetch thoughts
  }, []);

  // Function to fetch thoughts from the API
  const fetchThoughts = () => {
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts')
      .then((res) => res.json())
      .then((data) => setThoughts(data));
  };

  return (
    <div>
      < Header />
      <ThoughtForm setThoughts={setThoughts} />
      <ThoughtList thoughts={thoughts} setThoughts={setThoughts} />
    </div>
  );
};

export default App;