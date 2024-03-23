import { useState, useEffect } from "react";
import { Header } from "./Header.jsx";
import { HappyThoughtList } from "./HappyThoughtList.jsx";
import { HappyThoughtForm } from "./HappyThoughtForm.jsx";
import "./HappyThought.css";

//Fetch most recent Happy Thoughts with API
export const HappyThought = () => {
  const [thoughts, setThoughts] = useState([]);
  const [newThought, setNewThought] = useState("");

  useEffect(() => {
    fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts")
      .then((res) => res.json())
      .then((json) => {
        setThoughts(json);
      })
      .catch((error) => {
        console.error("Error fetching Happy Thoughts", error);
      });
  }, []);

  const handleNewThought = (event) => {
    setNewThought(event.target.value);
  };

  //Function to POST new Happy Thoughts
  const onFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: newThought,
      }),
    };

    fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts", options)
      .then((res) => res.json())
      .then((newThought) => {
        setThoughts((previousThoughts) => [newThought, ...previousThoughts]);
        setNewThought("");
      })
      .catch((error) => {
        console.error("Error posting Happy Thought:", error);
      });
  };

  return (
    <div>
      <Header />
      <main className="main-wrapper">
        <HappyThoughtForm
          newThought={newThought}
          onNewThoughtChange={handleNewThought}
          onFormSubmit={onFormSubmit}
        />
        {thoughts.map((thought) => (
          <HappyThoughtList
            key={thought._id}
            message={thought.message}
            createdAt={thought.createdAt}
            id={thought._id}
            thoughts={thoughts}
          />
        ))}
      </main>
    </div>
  );
};
