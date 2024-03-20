import { useState, useEffect } from "react";
import { ThoughtForm } from "./ThoughtForm";
import { HeartButton } from "./HeartButton";

export const Thoughts = ({ handleLike, handleAddThought }) => {
  const [thoughts, setThoughts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchThoughts = async () => {
    try {
      const response = await fetch(
        "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts"
      );
      const data = await response.json();
      if (data) {
        setThoughts(data);
      }
    } catch (error) {
      console.error("Error fetching thoughts", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchThoughts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="main-wrapper">
      <ThoughtForm onAddThought={handleAddThought} />
      {thoughts.map((thought, index) => (
        <div className="message" key={index}>
          {thought.message}
          <HeartButton thoughtId={thought._id} onLike={handleLike} />
        </div>
      ))}
    </div>
  );
};

// this component fetches the thoughts from the API when it mounts using the 'useEffect' hook with an empty dependency array
//data is fetched and stored in the 'thoughts' state
//then the component renders each thought as a separate 'div'
