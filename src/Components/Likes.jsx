import { useState } from "react";

export const Likes = ({ id, likes }) => {
  const [newLike, setNewLike] = useState(likes);

  const heartLike = () => {
    fetch(
      `https://project-happy-thoughts-api-do13.onrender.com/thoughts/${id}/like`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((res) => res.json())
      .then((json) => {
        setNewLike(newLike + 1);
      });
  };

  return (
    <div className="likes">
      <button
        onClick={heartLike}
        className={likes !== newLike ? "likedColorClass" : "notLikedClass"}
      >
        ❤️
      </button>
      <p className="likes">x {newLike}</p>
    </div>
  );
};
