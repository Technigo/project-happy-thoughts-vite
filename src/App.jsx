import React, { useState, useEffect } from "react";
import { ThoughtForm } from "./components/ThoughtForm";
import { ThoughtList } from "./components/ThoughtList";
import { LoadingSpinner } from "./components/LoadingSpinner";
import './App.css';

const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [likedThoughts, setLikedThoughts] = useState(() => {
    const savedLikes = localStorage.getItem("likedThoughts");
    return savedLikes ? JSON.parse(savedLikes) : [];
  });

  useEffect(() => {
    const fetchThoughts = async () => {
      try {
        const response = await fetch("https://project-happy-thoughts-api-uh8n.onrender.com/thoughts");
        const data = await response.json();
        setThoughts(data);
      } catch (error) {
        console.error("Error fetching thoughts:", error);
      }
    };
    fetchThoughts();
  }, []);

  useEffect(() => {
    localStorage.setItem("likedThoughts", JSON.stringify(likedThoughts));
  }, [likedThoughts]);

  const handleLike = (thoughtId) => {
    if (!likedThoughts.includes(thoughtId)) {
      setLikedThoughts((prevLikes) => [...prevLikes, thoughtId]);
      setThoughts((prevThoughts) =>
        prevThoughts.map((thought) =>
          thought._id === thoughtId
            ? { ...thought, hearts: thought.hearts + 1 }
            : thought
        )
      );
    }
  };

  return (
    <div className="app-container">
      <ThoughtForm setThoughts={setThoughts} />
      {thoughts.length === 0 ? (
        <LoadingSpinner />
      ) : (
        <ThoughtList
          thoughts={thoughts}
          onLike={handleLike}
          likedThoughts={likedThoughts}
        />
      )}
    </div>
  );
};

export default App;
