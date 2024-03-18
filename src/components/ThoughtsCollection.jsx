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
      .then(data => {
        // console.log(typeof data[0].createdAt);
        console.log("useEffect is performed");
        console.log(data);
        setThoughts(data);
      });
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
      .then(res => res.json())
      .then(newThought => {
        console.log(newThought);
        setThoughts(prevThoughts => [newThought, ...prevThoughts]);
      });
  };

  // const handleLike = event => {
  //   console.log(event.target.value);
  //   const newLikeNum = +event.target.value + 1;
  //   const index = event.target.id;
  //   console.log(typeof index);
  //   console.log(newLikeNum);
  //   const thoughtID = thoughts[+index]._id;
  //   fetch(
  //     `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thoughtID}/like`,
  //     {
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       method: "POST",
  //       body: JSON.stringify({ hearts: newLikeNum }),
  //     }
  //   )
  //     .then(res => res.json())
  //     .then(newData =>
  //       setThoughts(prevThoughts => [
  //         ...prevThoughts.slice(0, index),
  //         newData,
  //         ...prevThoughts.slice(index),
  //       ])
  //     );
  // };

  return (
    <div>
      <CreateThought
        onSubmit={createThought}
        value={message}
        onChange={handleInputChange}
      />
      {thoughts ? (
        thoughts.map(thought => (
          <ThoughtCard
            key={thought._id}
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
