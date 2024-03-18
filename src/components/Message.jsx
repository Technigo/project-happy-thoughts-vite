import { useState, useEffect } from "react";
import ThoughtCard from "./ThoughtCard";

const Message = () => {
  const [thoughts, setThoughts] = useState(null);

  useEffect(() => {
    fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts")
      .then(res => res.json())
      .then(data => setThoughts(data));
  }, []);

  return (
    <div>
      {thoughts &&
        thoughts.map(thought => (
          <ThoughtCard
            key={thought._id}
            message={thought.message}
            likes={thought.hearts}
            time={thought.createdAt}
          />
        ))}
    </div>
  );
};

export default Message;
