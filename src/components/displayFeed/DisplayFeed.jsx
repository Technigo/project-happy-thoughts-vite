import { useState, useEffect } from "react";
import NewPost from "../newPost/NewPost";
import Post from "./Post";
import "./DisplayFeed.css";

const DisplayFeed = () => {
  const [happyThoughts, setHappyThoughts] = useState([]);

  // const postURL = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";
  const postURL =
    "https://project-happy-thoughts-api-cpw0.onrender.com/thoughts";

  useEffect(() => {
    fetch(postURL)
      .then((response) => response.json())
      .then((data) => setHappyThoughts(data))
      .catch((error) =>
        console.error("Error fetching happy thoughts: ", error)
      );
  }, []);

  const handleSubmit = async (newThought) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json " },
      body: JSON.stringify({ message: newThought }),
    };

    const response = await fetch(postURL, requestOptions);
    const data = await response.json();

    setHappyThoughts([data, ...happyThoughts]);
  };

  const handleLike = async (thoughtId) => {
    // const likeURL = `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thoughtId}/like`;
    const likeURL = `https://project-happy-thoughts-api-cpw0.onrender.com/thoughts/${thoughtId}/like`;

    const requestOptions = {
      method: "POST",
    };

    try {
      const response = await fetch(likeURL, requestOptions);
      if (response.ok) {
        setHappyThoughts((prevThoughts) =>
          prevThoughts.map((thought) =>
            thought._id === thoughtId
              ? { ...thought, hearts: thought.hearts + 1 }
              : thought
          )
        );
      } else {
        console.error("Failed to like thought");
      }
    } catch (error) {
      console.error("Error liking thought: ", error);
    }
  };

  return (
    <div className="feedContainer">
      {/* Display the NewPost component*/}
      <NewPost onSubmit={handleSubmit} />

      {/* Map through happyThoughts to display existing posts */}
      {happyThoughts.map((thought) => (
        <div key={thought._id} className="messageContainer">
          {/* Render the Post component and pass the thought object and handleLike function */}
          <Post thought={thought} onLike={handleLike} />
        </div>
      ))}
    </div>
  );
};

export default DisplayFeed;
