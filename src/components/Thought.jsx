import "./thought.css";

import { useState } from "react";

export const Thought = ({
  id,
  message,
  hearts,
  time,
  loadingThoughts,
  getThought,
}) => {
  const [likes, setLikes] = useState(hearts);


export const Thought = ({ message, hearts, time, loadingThoughts, getThought }) => {


  const handleClick = () => {
    fetch(
      `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${id}/like`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((res) => res.json())
      .then(() => {
        setLikes(likes + 1);
      })
      .catch((error) => {
        console.error(
          "Something went wrong. Please try send some love again",
          error
        );
      });
  };

  return (
    <div className="thought-container">
      <div>{loadingThoughts ? "Loading thoughts..." : getThought}</div>
      <div className="message">{message}</div>
      <div>
        <button
          onClick={handleClick}
          className={likes === 0 ? "heart-button" : "liked-button"}>
          ❤️
        </button>{" "}
        x{hearts}
      </div>
      <div id="time">{time}</div>
    </div>
  );
};
