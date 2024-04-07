import "../css.components/thought.css";
import { useEffect, useState } from "react";
import { formatDistanceToNow } from "date-fns";

export const Thought = ({ id, message, hearts, time }) => {
  const [likes, setLikes] = useState("");

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

  useEffect(() => {});

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
