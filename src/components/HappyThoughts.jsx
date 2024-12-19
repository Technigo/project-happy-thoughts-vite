import { Header } from "./Header";
import { useState, useEffect } from "react";
import { ThoughtForm } from "./ThoughtForm";
import { ThoughtList } from "./ThoughtList";

export const HappyThoughts = () => {
  const [thoughts, setThoughts] = useState([]);
  const [newThought, setNewThought] = useState("");

  useEffect(() => {
    fetch("https://project-happy-thoughts-api-b7a3.onrender.com/thoughts")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch thoughts");
        }
        return res.json();
      })
      .then((data) => {
        setThoughts(data); // Backend should return an array of thoughts
      })
      .catch((error) => {
        console.error("Fel vid hämtning av tankar:", error);
      });
  }, []);

  const handleNewThought = (event) => {
    setNewThought(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const PostOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: newThought }),
    };

    fetch("https://project-happy-thoughts-api-b7a3.onrender.com/thoughts", PostOptions)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to post a new thought");
        }
        return res.json();
      })
      .then((data) => {
        setThoughts((previousThoughts) => [data, ...previousThoughts]);
        setNewThought(""); // Clear the input field
      })
      .catch((error) => {
        console.error("Error posting Happy Thought:", error);
      });
  };

  return (
    <div>
      <Header />
      <main className="main-wrapper">
        <div className="main-content">
          <ThoughtForm
            newThought={newThought}
            onNewThoughtChange={handleNewThought}
            onFormSubmit={onFormSubmit}
          />
          <ThoughtList thoughts={thoughts} />
        </div>
      </main>
    </div>
  );
};
