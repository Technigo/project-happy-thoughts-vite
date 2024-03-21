import { useState, useEffect } from "react";
import { Header } from "./components/Header.jsx";
import { HappyThought } from "./components/HappyThought.jsx";

export const App = () => {
  const [thoughts, setThoughts] = useState([]);

  useEffect(() => {
    fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts")
      .then((response) => response.json())
      .then((json) => {
        setThoughts(json);
      })
  }, []);

  return (
    <main className="main-wrapper">
      <Header />
      <div>
        {thoughts.map((thought) => (
          <HappyThought
            key={thought._id}
            message={thought.message}
            hearts={thought.hearts}
            time={thought.createdAt}
          />
        ))}
      </div>
    </main>
  );
};
