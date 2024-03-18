import { useState, useEffect } from "react";
import { HeartButton } from "../HeartButton/HeartButton";

import "./feed.css";

const apiUrl = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

export const Feed = () => {
  //create variable to store fetched data (thoughts)
  const [thoughts, setThoughts] = useState([]);

  //useEffect runs the getThoughts-function after the component mounts
  useEffect(() => {
    const getThoughts = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setThoughts(data);
      } catch (error) {
        console.error("Something didn't go to plan, please try again!");
      }
    };
    getThoughts();
  }, []); // empty arry: runs only on first render

  //maps over the toughts array and creates a card for each thought
  return (
    <section className="feedContainer">
      {thoughts.map((feedPost, index) => (
        <div className="cardContainer" key={index}>
          <p className="feedPost">{feedPost.message}</p>
          <div className="heartContainer">
            <div className="heartCount">
              <HeartButton />
              <p className="heartCount">x{feedPost.hearts}</p>
            </div>
            <p>{getRelativeTime(new Date(feedPost.createdAt))}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

//calculate time difference using getRelativeTime
const getRelativeTime = (date) => {
  const currentDate = new Date();
  const diffInMilliseconds = currentDate - date;

  const seconds = Math.floor(diffInMilliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (seconds < 60) {
    return "just now";
  } else if (minutes < 60) {
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else if (hours < 24) {
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else if (days < 30) {
    return `${days} day${days > 1 ? "s" : ""} ago`;
  } else if (months < 12) {
    return `${months} month${months > 1 ? "s" : ""} ago`;
  } else {
    return `${years} year${years > 1 ? "s" : ""} ago`;
  }
};
