import "../css.components/thought.css";
import { useState } from "react";
import { formatDistanceToNow } from "date-fns";

export const Thought = ({ id, message, hearts, time }) => {
  const [likes, setLikes] = useState("");

  const handleClick = () => {
    fetch(
      `https://project-happy-thoughts-api-jggw.onrender.com/thoughts/${id}/like`,
      {
        method: "PATCH",
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
      <div className="message">{message}</div>
      <div className="heart-and-time">
        <div>
          <button
            onClick={handleClick}
            className={likes !== hearts ? "heart-button" : "heart-button"}>
            ❤️
          </button>{" "}
          <span>x{hearts}</span>
        </div>
        <p>
          {formatDistanceToNow(new Date(time), {
            addSuffix: true,
          })}
        </p>
      </div>
    </div>
  );
};
