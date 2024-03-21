import { useState, useEffect } from "react";
import { ThoughtsCard } from "./components/ThoughtsCard";
import { ThoughtsForm } from "./components/ThoughtsForm";

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
      <ThoughtsForm
        setThoughts={setThoughts}
        fetchData={fetchData}
        apiUrl={url}
      />
      <ThoughtsCard thoughts={thoughts} apiUrl={url} />
    </div>
  );
};
