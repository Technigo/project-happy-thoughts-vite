import { useState, useEffect } from "react";

export const Thoughts = () => {
  const [thoughts, setThoughts] = useState([]);

  useEffect(() => {
    fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts`)
      .then((response) => response.json())
      .then((data) => {
        setThoughts(data);
      })
      .catch((error) => {
        console.error("Error fetching thoughts:", error);
      });
  }, []);

  return (
    <div>
      {thoughts.map((thought) => (
        <div key={thought._id}>
          <p>{thought.message}</p>
          {/* Add other thought properties here if needed */}
        </div>
      ))}
    </div>
  );
};
