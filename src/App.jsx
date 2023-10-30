import React, { useState, useEffect } from "react";
import { ThoughtList } from "./Components/ThoughtList";

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchThoughts = async () => {
    try {
      const response = await fetch(
        "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts"
      );
      if (response.ok) {
        const data = await response.json();
        setThoughts(data);
        setLoading(false);
      } else {
        console.error("Error fetching thoughts:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching thoughts:", error);
    }
  };

  useEffect(() => {
    fetchThoughts();
  }, []);

  return (
    <div className="App">
      <ThoughtList thoughts={thoughts} loading={loading} />
    </div>
  );
};

