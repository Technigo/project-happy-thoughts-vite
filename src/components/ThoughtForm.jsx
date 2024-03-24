import { useState } from "react";
import { ThoughtList } from "./List/ThoughtList.jsx";
import { ThoughtInput } from "./Input/ThoughtInput.jsx";

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