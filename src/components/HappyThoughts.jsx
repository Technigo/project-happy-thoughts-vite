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
      .catch((error) => {
        console.error(error);
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
