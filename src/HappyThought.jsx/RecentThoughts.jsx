import React, { useState, useEffect } from "react";
import { Hearts } from "./Hearts";

export const RecentThoughts = () => {
  const [RecentThoughts, setRecentThoughts] = useState([]);

  useEffect(() => {
    fetch("https://happy-thoughts-api-80bi.onrender.com/thoughts")
      .then((response) => response.json())
      .then((data) => setRecentThoughts(data));
  }, []);

  return (
    <div className="recent-boxes">
      <div>
        <h2>Recent Happy Thoughts</h2>
        <ul style={{ listStyleType: "none" }}>
          {RecentThoughts.map((thought) => (
            <>
              <li key={thought._id} className="thought">
                <p>{thought.message}</p>
                <Hearts thought={thought} />
              </li>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};
