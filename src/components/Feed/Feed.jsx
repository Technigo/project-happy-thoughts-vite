import { useState, useEffect } from "react";
import { HeartButton } from "../HeartButton/HeartButton";

import "./feed.css";

const apiUrl = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

export const Feed = () => {
  //all fetched thoughts (old)
  const [thoughts, setThoughts] = useState([]);

  //fetching the API (thoughts) inside the useEffect hook
  useEffect(() => {
    const getThoughts = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Couldn't fetch data!");
        }
        const data = await response.json();
        setThoughts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getThoughts();
  }, []); //stops code from running every time

  //update likes/heartsCount
  const updateHeartsCount = async (postId, updatedHeartsCount) => {
    try {
      const response = await fetch(`${apiUrl}/${postId}/like`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ hearts: updatedHeartsCount }),
      });
      if (!response.ok) {
        throw new Error("Failed to update hearts count");
      }
      const updatedThoughts = thoughts.map((thought) =>
        thought._id === postId
          ? { ...thought, hearts: updatedHeartsCount }
          : thought
      );
      setThoughts(updatedThoughts);
    } catch (error) {
      console.error("Error updating hearts count:", error);
    }
  };

  //maps over the toughts array and creates a card for each thought
  return (
    <section className="feed-container">
      {thoughts.map((feedPost) => (
        <div className="card-container" key={feedPost._id}>
          <p className="feed-post">{feedPost.message}</p>
          <div className="heart-container">
            <div className="heart-count">
              <HeartButton
                heartsCount={feedPost.hearts}
                updateHeartsCount={(updatedHeartsCount) =>
                  updateHeartsCount(feedPost._id, updatedHeartsCount)
                }
              />
              <p className="heart-count">x{feedPost.hearts}</p>
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
