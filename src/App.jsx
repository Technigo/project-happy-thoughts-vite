import { useState, useEffect } from "react";
import { Thoughts } from "./components/Thoughts";

export const App = () => {
  const [thoughts, setThoughts] = useState([]);

  useEffect(() => {
    fetch(`GET https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts`)
      .then((response) => response.json())
      .then((data) => {
        setThoughts(data);
      })
      .catch((error) => {
        console.error("Error fetching thoughts:", error);
      });
  }, []);

  return (
    <div className="App">
      <div className="header">
        <h1 className="original-gradient">Project Happy Thoughts</h1>
        <h2>By CaroL @Technigo Bootcamp</h2>
      </div>
      <Thoughts thoughts={thoughts} setThoughts={setThoughts} />
    </div>
  );
};
