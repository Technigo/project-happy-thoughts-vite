/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { NewThoughtForm } from "./components/NewThoughtForm";
import { Thoughts } from "./components/Thoughts";
import { Header } from "./components/Header";

export const App = () => {
  const [thoughts, setThoughts] = useState([]);

  useEffect(() => {
    fetch(`https://project-happy-thoughts-api-ss0r.onrender.com/thoughts`)
      .then((response) => response.json())
      .then((data) => {
        setThoughts(data);
      })
      .catch((error) => {
        console.error("Error fetching thoughts:", error);
      });
  }, []);

  const addNewThought = (newThought) => {
    setThoughts([newThought, ...thoughts]); // New thought will be displayed at the top
  };

  const handleLike = (id) => {
    fetch(
      `https://project-happy-thoughts-api-ss0r.onrender.com/thoughts/${id}/like`,
      {
        method: "POST",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        const updatedThoughts = thoughts.map((thought) => {
          if (thought._id === data._id) {
            return data;
          } else {
            return thought;
          }
        });
        setThoughts(updatedThoughts);
      })
      .catch((error) => {
        console.error("Error liking thought:", error);
      });
  };

  return (
    <div className="App">
      <Header />
      <NewThoughtForm onNewThought={addNewThought} />
      <Thoughts thoughts={thoughts} onLike={handleLike} />
    </div>
  );
};
