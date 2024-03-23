import React, { useEffect, useState } from "react";
import "./ThoughtFeed.css";
import moment from "moment";

const APIURL = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

export const ThoughtFeed = () => {
  const [recentThoughts, setThoughts] = useState([]);
  const [likedThoughts, setLikedThoughts] = useState([]);

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
      if (likedThoughts.includes(thoughtId)) {

        setLikedThoughts(likedThoughts.filter((id) => id !== thoughtId));
      } else {

        setLikedThoughts([...likedThoughts, thoughtId]);
      }
      fetchData();
    } catch (error) {
      console.error("Error liking thought:", error);
    }
  };

  return (
    <div className="thought-feed-container">
        {recentThoughts.map((thought) => (
          <div key={thought._id} className="thought-card">
            <p>{thought.message}</p>
            <button
              onClick={() => handleLike(thought._id)}
              className={`heart-btn${
                likedThoughts.includes(thought._id) ? " clicked" : ""
              }`}
            >
              ❤️
            </button>
            <span> x {thought.hearts}</span>
            <div className="post-time">
              {moment(thought.createdAt).fromNow()}
            </div>
          </div>
        ))}
    </div>
  );
};
