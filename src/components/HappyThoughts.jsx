import { useState, useEffect } from "react";
import { PropTypes } from "prop-types";
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
    fetch("<https://technigo-thoughts.herokuapp.com/>", {
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
  // fetch updated list with new thought included

  // useEffect : fetch thoughts

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
      <ThoughtsList thoughts={thoughts} setThoughts={setThoughts} />
    </div>
  );
};

HappyThoughts.propTypes = {
  thoughts: PropTypes.array.isRequired,
};
