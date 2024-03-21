import React, { useEffect, useState } from "react";

const APIURL = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

export function FetchThought() {
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
      // Handle error state here, e.g., setThoughts([]) or show an error message
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
          <li key={thought._id}>
            {thought.message}
            <button onClick={() => handleLike(thought._id)}>❤️</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
