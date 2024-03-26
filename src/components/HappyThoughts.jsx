import { useState, useEffect } from "react";
import ThoughtsForm from "./ThoughtsForm.jsx";
import ThoughtsList from "./ThoughtsList.jsx";
import "./HappyThoughts.css";

export const HappyThoughts = () => {
  const [thoughts, setThoughts] = useState([]);
  const [newThought, setNewThought] = useState("");

  // API ENDPOINT
  const url = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

  // FUNCTION TO FETCH VALUES FROM API
  const fetchHappyThoughts = () => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setThoughts(json);
      })
      .catch((error) => {
        console.error("Could not fetch thoughts:", error);
      });
  };

  const handleNewThoughtChange = (event) => {
    setNewThought(event.target.value);
  };

  // FUNCTION TO POST NEW THOUGHT
  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (newThought.trim().length < 10) {
      alert("💌 Happy thought must be minimum 5 characters long 💌");
      return;
    } else if (newThought.trim().length > 140) {
      alert("💌 Happy thought must be maximum 140 characters long 💌");
      return;
    }

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        message: newThought,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((newThought) => {
        setThoughts((previousThoughts) => [newThought, ...previousThoughts]);
      })
      .then(setNewThought(""))
      .catch((error) => {
        console.error("Error adding new thought:", error);
      });
  };

  // FUNCTION TO HANDLE LIKES
  const handleHeartClick = (thoughtId) => {
    fetch(url + "/" + thoughtId + "/like", {
      method: "POST",
    }).catch((error) => {
      console.error(error);
    });
  };

  useEffect(() => {
    fetchHappyThoughts();
  }, []);

  return (
    <div className="wrapper">
      <h1 className="header-text"> Happy thoughts</h1>
      <ThoughtsForm
        newThought={newThought}
        onNewThoughtChange={handleNewThoughtChange}
        handleFormSubmit={handleFormSubmit}
      />
      <ThoughtsList thoughts={thoughts} handleHeartClick={handleHeartClick} />
    </div>
  );
};
