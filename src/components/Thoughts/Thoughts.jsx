import { useEffect } from "react";
import "./thoughts.css";

export const Thoughts = ({ thought, setThought }) => {
  useEffect(() => {
    fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts")
      .then((response) => response.json())
      .then((json) => setThought(json))
      .catch((error) => console.error(error));
  });

  return (
    <div className="thought-container">
      <div>
        {thought.map((thought) => {
          return (
            <pre className="thought-card" key={thought.id}>
              {thought.message}
            </pre>
          );
        })}
      </div>
    </div>
  );
};