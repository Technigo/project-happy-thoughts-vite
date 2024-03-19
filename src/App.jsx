import { useState, useEffect } from "react";
import { ThoughtCard } from "./components/ThoughtCard";
import { ThoughtForm } from "./components/ThoughtForm";

export const App = () => {
  const [thoughts, setThoughts] = useState(null);
  const url = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

  const fetchData = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setThoughts(data))
      .catch((error) => console.error("Error fetching data: ", error));
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="container">
      <ThoughtForm thoughts={thoughts} setThoughts={setThoughts} url={url} />
      <ThoughtCard thoughts={thoughts} />
    </div>
  );
};
