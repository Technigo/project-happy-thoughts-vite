import { useState, useEffect } from "react";

export const HeartDisplay = ({ post, handleUpdate, setTotalHeartCount }) => {
  const [hearts, setHearts] = useState(post.hearts);
  const [isLiked, setIsLiked] = useState(
    localStorage.getItem(`liked-${post._id}`) === "true" ? true : false
  );

  const handleHeartClick = async (event) => {
    event.preventDefault();
    setHearts((prev) => prev + 1);
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
        console.log("dependency rendered");
        const plusHeartCount = localStorage.getItem("shared-heart-count")
          ? parseInt(localStorage.getItem("shared-heart-count"), 10) + 1
          : "1";
        localStorage.setItem("shared-heart-count", plusHeartCount);
        setTotalHeartCount(plusHeartCount);
      }
    } catch (err) {
      console.error("Error:", err);
    }

    handleUpdate();
  };

  useEffect(() => {
    if (isLiked) {
      localStorage.setItem(`liked-${post._id}`, true);
    } else {
      localStorage.removeItem(`liked-${post._id}`);
    }
  }, [isLiked, post._id]);

  return (
    <div className="heart-display">
      <button
        className={`heart-icon ${isLiked ? "liked-icon" : ""}`}
        onClick={handleHeartClick}
      >
        ❤️
      </button>
      <p className="hearts-count"> x {post.hearts}</p>
    </div>
  );
};
