import { useState, useEffect } from "react";
import { ThoughtCards } from "./ThoughtCards";
import { NewThoughtForm } from "./NewThoughtForm";

export const Thoughts = () => {
  const [thoughts, setThoughts] = useState(null);
  const url = "https://happy-thoughts-api-uryg.onrender.com/thoughts";

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
      <NewThoughtForm
        setThoughts={setThoughts}
        fetchData={fetchData}
        apiUrl={url}
      />
      <ThoughtCards thoughts={thoughts} apiUrl={url} />
    </div>
  );
};
