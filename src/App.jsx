import { useState, useEffect } from "react";
import { Thought } from "./components/Thought";
import { PostForm } from "./components/PostForm";

export const App = () => {
  const [fetchThought, setFetchThought] = useState([]);
  const [getThought, setGetThought] = useState("");
  const [loadingThoughts, setLoadingThoughts] = useState(true);
  const [newThought, setNewThought] = useState("");

  const url = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

  // UseEffect???
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        // Vad får jag här?
        setFetchThought(json);
        console.log(json);
      });
    // [] dependencies
  }, []);

  useEffect(() => {}, [fetchThought]);

  // GET new thought
  const fetchMessages = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data) {
        setGetThought(data.thoughts);
      }
    } catch (error) {
      console.log("Could not load toughts, try again", error);
    } finally {
      setLoadingThoughts(false);
    }
  };

  const handleNewThoughtChange = (event) => {
    setNewThought(event.target.value);
  };

  //POST new thought

  const onFormSubmit = async (event) => {
    event.preventDefault();

    if (newThought.trim().length < 5 && newThought.trim().length < 140) {
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
        await fetchMessages();
      }
    } catch (error) {
      console.error(error);
    } finally {
      setNewThought("");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetchMessages();
    }, 1000);
  }, []);

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
          loadingThoughts={loadingThoughts}
          getThought={getThought}
          id={thought._id}
        />
      ))}
    </div>
  );
};
