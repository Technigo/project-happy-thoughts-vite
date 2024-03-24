import { useState } from "react";

export const HappyThoughtLikes = ({ id, hearts }) => {
  const [likes, setLikes] = useState(hearts);

  const handleLike = () => {
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
        console.error("Error:", error);
      });
  };

  return (
    <div className="likes">
      <button
        onClick={handleLike}
        aria-label="Like-button"
        className={likes === 0 ? "heart-button" : "liked-button"}
        type="button"
      >
        ❤️
      </button>
      <p>x {likes}</p>
    </div>
  );
};
