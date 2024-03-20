import { useState, useEffect } from "react";
import ThoughtCard from "./ThoughtCard";
import CreateThought from "./CreateThought";

const ThoughtsCollection = () => {
  const [thoughts, setThoughts] = useState(null);
  const [message, setMessage] = useState("");
  const [likedPosts, setLikedPosts] = useState([]);
  const [validated, setValidated] = useState(true);

  const recordLikedPosts = thoughtID => {
    if (likedPosts.includes(thoughtID)) return;
    setLikedPosts([...likedPosts, thoughtID]);
  };

  const handleInputChange = event => {
    setValidated(true);
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
    if (message >= 5 && message <= 140) {
      fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ message: message }),
      })
        .then(res => res.json())
        .then(newThought => {
          console.log("New thought:", newThought);
          setThoughts(prevThoughts => [newThought, ...prevThoughts]);
          setMessage("");
        });
    } else {
      setValidated(false);
    }
    // add some validation to prevent the message to be empty and from 5-140 letters
  };

  return (
    <div>
      <CreateThought
        onSubmit={createThought}
        value={message}
        onChange={handleInputChange}
      />
      <p>You have liked {likedPosts.length} posts.</p>
      {!validated && <p>You should type within 5 to 140 words</p>}
      {thoughts ? (
        thoughts.map((thought, index) => (
          <ThoughtCard
            key={thought._id}
            message={thought.message}
            likes={thought.hearts}
            time={thought.createdAt}
            thoughtID={thought._id}
            cardIndex={index}
            recordLikes={recordLikedPosts}
          />
        ))
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default ThoughtsCollection;
