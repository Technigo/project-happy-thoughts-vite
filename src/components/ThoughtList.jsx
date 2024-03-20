import { useState, useEffect } from "react";
import "./ThoughtList.css"

export const ThoughtList = () => {
  const [thoughts, setThoughts] = useState([]);

  const API_ENDPOINT =
    "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";
  const METHOD = "GET";

  useEffect(() => {
    fetchThoughts();
  }, []);

  const fetchThoughts = async () => {
    try {
      const response = await fetch(API_ENDPOINT, {
        method: METHOD,
      });
      if (!response.ok) {
        throw new Error("Failed to fetch thoughts");
      }
      const data = await response.json();
      setThoughts(data);
    } catch (error) {
      console.error("Error fetching thoughts:", error);
    }
  };

  const sortedThoughts = thoughts.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  return (
    <div className="thought-list">
      {sortedThoughts.map((thought) => (
        <div key={thought._id} className="thought-container">
          <div className="thought-message">
            <p>{thought.message}</p>
          </div>
          <div className="thought-details">
            <p>Hearts: {thought.hearts}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
