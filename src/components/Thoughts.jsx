import { useState, useEffect } from "react";
import { ThoughtCards } from "./ThoughtCards";
import { NewThoughtForm } from "./NewThoughtForm";
import { Loading } from "./Loading";

export const Thoughts = () => {
  const [thoughts, setThoughts] = useState(null);
  const [loading, setLoading] = useState(false);
  const url = "https://happy-thoughts-api-uryg.onrender.com/thoughts";

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setThoughts(data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    } finally {
      setLoading(false);
    }
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
      {loading ? (
        <Loading />
      ) : (
        <ThoughtCards thoughts={thoughts} apiUrl={url} />
      )}
    </div>
  );
};
