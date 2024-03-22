import React, { useEffect, useState } from "react";

const APIURL = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

export const ThoughtFeed = () => {
  const [recentThoughts, setThoughts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(APIURL);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await response.json();
      setThoughts(json);
    } catch (error) {
      console.error("Error fetching thoughts:", error);
    }
  };

  const handleLike = async (thoughtId) => {
    try {
      const response = await fetch(`${APIURL}/${thoughtId}/like`, {
        method: "POST",
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      // Optionally, you can update the state or trigger a refetch
      // based on your application logic
      fetchData();
    } catch (error) {
      console.error("Error liking thought:", error);
      // Handle error state here, e.g., show an error message
    }
  };

  return (
    <div>
      <ul>
        {recentThoughts.map((thought) => (
          <div key={thought._id}>
            <p>{thought.message}</p>
            <button onClick={() => handleLike(thought._id)}>❤️</button>
            <span> x {thought.hearts}</span>

          </div>
        ))}
      </ul>
    </div>
  );
}
