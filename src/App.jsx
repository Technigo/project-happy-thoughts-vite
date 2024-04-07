import { useState, useEffect } from "react";
import { Thought } from "./components/Thought";
import { PostForm } from "./components/PostForm";

export const App = () => {
  const [fetchThought, setFetchThought] = useState([]);
  const [newThought, setNewThought] = useState("");

  const url = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setFetchThought(json);
        console.log(json);
      });
  }, [fetchThought]);

  const handleNewThoughtChange = (event) => {
    setNewThought(event.target.value);
  };

  //POST new thought

  const onFormSubmit = async (event) => {
    event.preventDefault();

    if (newThought.trim().length < 5 || newThought.trim().length > 140) {
      alert("Please type a thought between 5 and 140 characters");
      return;
    }

    const thought = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: newThought,
      }),
    };
    try {
      const response = await fetch(url, thought);

      if (response.ok) {
        await newThought();
      }
    } catch (error) {
      console.error(error);
    } finally {
      setNewThought("");
    }
  };

  return (
    <div className="page-content">
      <div>
        <PostForm
          newThought={newThought}
          onHandleNewThoughtChange={handleNewThoughtChange}
          onFormSubmit={onFormSubmit}
        />
      </div>
      {fetchThought.map((thought) => (
        <Thought
          key={thought._id}
          message={thought.message}
          hearts={thought.hearts}
          time={thought.createdAt}
          id={thought._id}
        />
      ))}
    </div>
  );
};
