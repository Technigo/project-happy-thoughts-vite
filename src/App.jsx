import { useState, useEffect } from "react";
import { Fetch } from "./components/Fetch";

export const App = () => {
  const [fetchThought, setFetchThought] = useState([]);

  useEffect(() => {
    fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts")
      .then((res) => res.json())
      .then((json) => {
        setFetchThought(json);
        console.log(json);
      });
  }, []);

  useEffect(() => {}, [fetchThought]);

  return (
    <div>
      <h1>Happy Thoughts</h1>
      {fetchThought.map((thought) => (
        <Fetch
          key={thought._id}
          message={thought.message}
          hearts={thought.hearts}
          time={thought.createdAt}
        />
      ))}
    </div>
  );
};
