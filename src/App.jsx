import { useState, useEffect } from "react";
import { Thoughts } from "./Components/Thoughts.jsx";
import { PostThoughts } from "./Components/PostThought.jsx";

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [newThought, setNewThought] = useState("");

  // FETCHING THE VALUES FROM THE API
  useEffect(() => {
    fetch("https://project-happy-thoughts-api-do13.onrender.com/thoughts")
      .then((res) => res.json())
      .then((json) => {
        setThoughts(json.response);
      });
  }, []);

  // FUNCTION TO HANDLE THE NEW POST
  const handleNewPost = (event) => {
    setNewThought(event.target.value);
  };

  const handlePostSubmit = (event) => {
    event.preventDefault();
    fetch("https://project-happy-thoughts-api-do13.onrender.com/thoughts", {
      method: "POST",
      body: JSON.stringify({
        message: newThought,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((newThought) => {
        setThoughts((previousThoughts) => [newThought, ...previousThoughts]);
      });
  };

  // APP SECTION TO SHOWCASE THE INPUT FIELD AND THE OTHER THOUGHTS
  return (
    <div className="app-section">
      <h1>Happy thoughts</h1>
      <PostThoughts
        postSubmit={handlePostSubmit}
        newMessage={handleNewPost}
        newThought={newThought}
      />
      <div className="thoughts-section">
        {thoughts.map((thought) => (
          <Thoughts
            key={thought._id}
            id={thought._id}
            message={thought.message}
            likes={thought.hearts}
            time={thought.createdAt}
          />
        ))}
      </div>
    </div>
  );
};
