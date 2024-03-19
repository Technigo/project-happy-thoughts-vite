import { useState, useEffect } from "react";
import ThoughtCard from "./ThoughtCard";
import CreateThought from "./CreateThought";

const ThoughtsCollection = () => {
  const [thoughts, setThoughts] = useState(null);
  const [message, setMessage] = useState("");

  const handleInputChange = event => {
    const userInput = event.target.value;
    setMessage(userInput);
  };

  useEffect(() => {
    fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts")
      .then(res => res.json())
      .then(data => {
        console.log("useEffect is performed");
        console.log(data);
        setThoughts(data);
      });
  }, []);

  const createThought = event => {
    event.preventDefault();
    console.log(message);
    // add some validation to prevent the message to be empty and from 5-140 letters
    fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ message: message }),
    })
      .then(res => res.json())
      .then(newThought => {
        console.log(newThought);
        setThoughts(prevThoughts => [newThought, ...prevThoughts]);
        setMessage("");
      });
  };

  return (
    <div>
      <CreateThought
        onSubmit={createThought}
        value={message}
        onChange={handleInputChange}
      />
      {thoughts ? (
        thoughts.map((thought, index) => (
          <ThoughtCard
            key={index}
            message={thought.message}
            likes={thought.hearts}
            time={thought.createdAt}
            thoughtID={thought._id}
          />
        ))
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default ThoughtsCollection;
