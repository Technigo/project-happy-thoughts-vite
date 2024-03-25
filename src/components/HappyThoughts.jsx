import { useState, useEffect } from "react";
import ThoughtsForm from "./ThoughtsForm.jsx";
import ThoughtsList from "./ThoughtsList.jsx";

export const HappyThoughts = () => {
  // useStates for thoughts list, new thoughts and loading
  const [thoughts, setThoughts] = useState([]);
  const [newThought, setNewThought] = useState("");

  // fetch Thoughts
  const url = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

  const fetchHappyThoughts = () => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setThoughts(json);
      })
      .catch((error) => {
        console.error("Could not fetch thoughts:", error);
      });
  };

  const handleNewThoughtChange = (event) => {
    setNewThought(event.target.value);
  };

  // POST new thought
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

  const handleHeartClick = (thoughtId) => {
    console.log("banan");
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
      <ThoughtsForm
        newThought={newThought}
        onNewThoughtChange={handleNewThoughtChange}
        handleFormSubmit={handleFormSubmit}
      />
      <ThoughtsList thoughts={thoughts} handleHeartClick={handleHeartClick} />
    </div>
  );
};
