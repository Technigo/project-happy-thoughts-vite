import React, { useState, useEffect } from "react";
import { Hearts } from "./Hearts";

export const RecentThoughts = () => {
  const [RecentThoughts, setRecentThoughts] = useState([]);

  useEffect(() => {
    fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts")
      .then((response) => response.json())
      .then((data) => setRecentThoughts(data));
  }, []);

  return (
    <div className="RecentThoughts">
      <h2>Recent Happy Thoughts</h2>
      <ul style={{ listStyleType: "none" }}>
        {RecentThoughts.map((thought) => (
          <>
            <li key={thought._id} className="thought">
              <p>{thought.message}</p>
              {/* <button className="thought-like-button">
                ❤️ {thought.hearts}
              </button> */}
            </li>
            <Hearts thought={thought} />
          </>
        ))}
      </ul>
    </div>
  );
};
