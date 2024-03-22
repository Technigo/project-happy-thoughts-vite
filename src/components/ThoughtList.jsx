import { useState, useEffect } from "react";
import { LikeButton } from "./LikeButton.jsx";
import "./ThoughtList.css";

export const ThoughtList = () => {
  const [thoughts, setThoughts] = useState([]);

  const API_ENDPOINT =
    "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";
  const METHOD = "GET";

  const fetchThoughts = async () => {
    try {
      const response = await fetch(API_ENDPOINT, { method: METHOD });
      if (!response.ok) {
        throw new Error("Error fetching data");
      }
      const data = await response.json();
      setThoughts(data);
    } catch (error) {
      console.error("Error fetching thoughts:", error);
    }
  };

  useEffect(() => {
    fetchThoughts();
    const fetchInterval = setInterval(fetchThoughts, 60000);
    return () => {
      clearInterval(fetchInterval);
    };
  }, []);

  return (
    <div className="thought-list">
      {thoughts.map((thought) => (
        <div key={thought._id} className="thought-container">
          <div className="thought-message">
            <p>{thought.message}</p>
            <p>Hearts: {thought.hearts}</p>
          </div>
          <LikeButton
            thoughtId={thought._id}
            initialLikes={thought.hearts}
            onLike={fetchThoughts}
          />
        </div>
      ))}
    </div>
  );
};
