import { useState } from "react";
import { ThoughtList } from "./ThoughtList.jsx";
import { ThoughtInput } from "./ThoughtInput.jsx";

export const ThoughtForm = () => {
  const [thoughts, setThoughts] = useState([]);

  const handleAddThought = (newThought) => {
    setThoughts([...thoughts, newThought]);
  };

  return (
    <div>
      <ThoughtInput onAddThought={handleAddThought} />
      <ThoughtList thoughts={thoughts} />
    </div>
  );
};
