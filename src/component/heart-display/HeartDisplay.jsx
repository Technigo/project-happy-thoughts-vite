import { useState, useEffect } from "react";

export const HeartDisplay = ({ post, handleUpdate, handlePlusHeartCount }) => {
  const [isLiked, setIsLiked] = useState(
    localStorage.getItem(`liked-${post._id}`)
  );

  const handleHeartClick = async (event) => {
    event.preventDefault();

    setIsLiked(true);

    if (!localStorage.getItem(`liked-${post._id}`)) {
      try {
        const response = await fetch(
          `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${post._id}/like`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ hearts: true }),
            //seems like it increments by default
          }
        );

        if (!response.ok) {
          console.log("Like failed.");
        } else {
          console.log("Liked!");
          handlePlusHeartCount();
        }
      } catch (err) {
        console.error("Error:", err);
      }
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
        className={`heart-icon ${isLiked && "liked-icon"}`}
        onClick={handleHeartClick}
      >
        ❤️
      </button>
      <p className="hearts-count"> x {post.hearts}</p>
    </div>
  );
};
