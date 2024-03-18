import { useState } from "react";
import "./HeartDisplay.css";

export const HeartDisplay = ({ post, handleUpdate }) => {
  const [hearts, setHearts] = useState(post.hearts);
  const [isLiked, setIsLiked] = useState(false);

  const handleHeartClick = async (event) => {
    event.preventDefault();
    setHearts(hearts + 1);
    setIsLiked((prev) => !prev);

    try {
      const response = await fetch(
        `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${post._id}/like`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ hearts: hearts }),
        }
      );

      if (!response.ok) {
        console.log("Like failed.");
      } else {
        console.log("Liked!");
      }
    } catch (err) {
      console.error("Error:", err);
    }

    handleUpdate();
  };

  return (
    <>
      <button
        className={`heart-icon ${isLiked ? "liked-icon" : ""}`}
        onClick={handleHeartClick}
      >
        ❤️
      </button>
      <p className="heart-amount"> x {post.hearts}</p>
    </>
  );
};
