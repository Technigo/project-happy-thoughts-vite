import { useState, useEffect } from "react";
import { HappyThoughts } from "./components/Thoughts";
import { PostThoughts } from "./components/PostThought";

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [newThought, setNewThought] = useState("");

  // FETCHING THE VALUES FROM THE API
  useEffect(() => {
    fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts")
      .then((res) => res.json())
      .then((json) => {
        setThoughts(json);
        console.log(json);
      });
  }, []);

  // FUNCTION TO HANDLE THE NEW POST
  const handleNewPost = (event) => {
    setNewThought(event.target.value);
  };

  const handlePostSubmit = (event) => {
    event.preventDefault();
    fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts", {
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
          <HappyThoughts
            key={thought._id}
            message={thought.message}
            likes={thought.hearts}
            time={thought.createdAt}
          />
        ))}
      </div>
    </div>
  );
};
