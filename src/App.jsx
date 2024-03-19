import React, { useState, useEffect } from "react";
import { ThoughtList } from "../src/assets/components/ThoughtList";
import { ThoughtForm } from "../src/assets/components/ThoughtForm";
import "./App.css";

function App() {
  const [thoughts, setThoughts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [likedThoughts, setLikedThoughts] = useState([]);
  const [totalUserLikes, setTotalUserLikes] = useState(0);
  const apiUrl = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

  useEffect(() => {
    // Fetch recent thoughts when the component mounts
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setThoughts(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching thoughts:", error));
  }, []);

  const onThoughtSubmit = (newThought) => {
    setThoughts([newThought, ...thoughts]);
  };

  const onLike = (thoughtId) => {
    if (!likedThoughts.includes(thoughtId)) {
      // The user hasn't liked this thought before
      // Update the likes for the thought in the thoughts state
      setThoughts((prevThoughts) =>
        prevThoughts.map((thought) =>
          thought._id === thoughtId ? { ...thought, hearts: thought.hearts + 1 } : thought
        )
      );
  
      // Update the totalLikes when a thought is liked
      setTotalUserLikes(totalUserLikes + 1);
  
      // Add the thought ID to the list of liked thoughts
      setLikedThoughts([...likedThoughts, thoughtId]);
    }
  };

  return (
    <div className="App">
      <h1>Happy Thoughts</h1>
      <div className="ThoughtForm">
        <ThoughtForm onThoughtSubmit={onThoughtSubmit} />
      </div>
      <p className="TotalLikes">Total ❤️ you have given so far: {totalUserLikes}</p>
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <ThoughtList
          thoughts={thoughts}
          onLike={onLike}
          totalUserLikes={totalUserLikes}
          setTotalUserLikes={setTotalUserLikes}
          likedThoughts={likedThoughts}
        />        
      )}
    </div>
  );
  
}

export default App;
