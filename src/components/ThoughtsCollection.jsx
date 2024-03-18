import { useState, useEffect } from "react";
import ThoughtCard from "./ThoughtCard";
import CreateThought from "./CreateThought";

const ThoughtsCollection = () => {
  const [thoughts, setThoughts] = useState(null);
  const [message, setMessage] = useState("Type your happy thought here!");

  const handleInputChange = event => {
    const userInput = event.target.value;
    setMessage(userInput);
  };

  useEffect(() => {
    fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts")
      .then(res => res.json())
      .then(data => setThoughts(data));
  }, []);

  const createThought = event => {
    event.preventDefault();
    console.log(message);
    fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ message: message }),
    })
      .then(res => res.json)
      .then(newThought => {
        console.log(newThought);
        setThoughts(prevThoughts => {
          [newThought, ...prevThoughts];
        });
      });
  };

  return (
    <div>
      <CreateThought
        onSubmit={createThought}
        value={message}
        onChange={handleInputChange}
      />
      {thoughts &&
        thoughts.map(thought => (
          <ThoughtCard
            key={thought._id}
            message={thought.message}
            likes={thought.hearts}
            time={thought.createdAt}
          />
        ))}
    </div>
  );
};

export default ThoughtsCollection;
