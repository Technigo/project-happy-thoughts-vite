import { useEffect } from "react";
import "./thoughts.css";

export const Thoughts = ({ thought, setThought }) => {
  useEffect(() => {
    fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts")
      .then((response) => response.json())
      .then((json) => setThought(json))
      .catch((error) => console.error(error));
  }, []); // Make sure to pass an empty dependency array to avoid excessive API calls.

  // Function to generate a unique key for each thought
  const generateUniqueKey = (thought) => {
    return thought.id; // Assuming thought.id is unique for each thought.
  };

  return (
    <div className="thought-container">
      <div>
        {thought.map((thought) => {
          const uniqueKey = generateUniqueKey(thought);
          return (
            <pre className="thought-card" key={uniqueKey}>
              {thought.message}
            </pre>
          );
        })}
      </div>
    </div>
  );
};
