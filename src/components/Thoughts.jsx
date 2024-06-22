import { ThoughtsForm } from "./ThoughtsForm";
import { ThoughtsList } from "./ThoughtsList";
import { useEffect, useState } from "react";
import "./Thoughts.css";


export const Thoughts = () => {
  const [thoughtList, setThoughtList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newThought, setNewThought] = useState("");
  const VITE_API_URL = import.meta.env.VITE_API_URL;
  const API = `${VITE_API_URL}/thoughts/`;
  const [message, setMessage] = useState(null);


  const fetchThoughts = async () => {
    setLoading(true);
    try {
      const response = await fetch(API);
      if (response.ok) {
        const thoughts = await response.json();
        setThoughtList(thoughts);
      }
    } catch (error) {
      setMessage("Failed to fetch thoughts", error);

    } finally {
      setLoading(false);
    }
  };

  const handleNewThought = (newThought) => {
    setNewThought(newThought.target.value);
  };


  const onThoughtSubmit = async (event) => {
    event.preventDefault();
    if (newThought.trim().length < 10) {
      alert("Thought must be at least 10 characters long");
      return;
    }
    if (newThought.trim().length > 140) {
      alert("Thought must be at most 140 characters long");
      return;
    }
    const newThoughtObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: newThought }),
    };
    try {
      const response = await fetch(API, newThoughtObject);
      if (response.ok) {
        await fetchThoughts();
      }
    } catch (error) {
      setMessage("Failed to post thought", error);
    } finally {
      setNewThought("");
    }
  };

  useEffect(() => {
    fetchThoughts();
  }, []);

  return (
    <div>
      <ThoughtsForm
        newThought={newThought}
        onThoughtChange={handleNewThought}
        onThoughtSubmit={onThoughtSubmit}
      />
      {message && <p>{message}</p>}
      <ThoughtsList
        loading={loading}
        thoughtList={thoughtList}
        setThoughtList={setThoughtList}
      />
    </div>
  );
};
