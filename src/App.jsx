import { useState, useEffect } from "react";
// import "./App.css";
import { ThoughtForm } from "./Components/ThoughtForm/ThoughtForm";
import { ThoughtList } from "./Components/ThoughtList/ThoughtList";
import { Header } from "./Components/Header/Header";

const API_URL = 'https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts';

export const App = () => {
  // State to store the list of thoughts
  const [thoughts, setThoughts] = useState([]);

  // Fetch thoughts from the API and set them in state
  const fetchThoughts = async () => {
    try {
      const response = await fetch(API_URL);
      if (response.ok) {
        const data = await response.json();
        setThoughts(data);
      } else {
        console.error('Failed to fetch thoughts');
      }
    } catch (error) {
      console.error('Error fetching thoughts:', error);
    }
  };

  // Fetch thoughts when the component mounts
  useEffect(() => {
    fetchThoughts();
  }, []);

  return (
    <div>
      <Header />
      <ThoughtForm fetchThoughts={fetchThoughts} />
      {/* Pass the thoughts array as a prop to ThoughtList */}
      <ThoughtList thoughts={thoughts} />
    </div>
  );
};
