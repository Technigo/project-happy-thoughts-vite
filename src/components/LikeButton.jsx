import { useState } from "react";

export const LikeButton = ({ likes, thoughtID, apiUrl }) => {
  const [hearts, setHearts] = useState(likes);
  const [isClicked, setIsClicked] = useState(false);

  const handleLike = () => {
    setIsClicked(true);
    fetch(`${apiUrl}/${thoughtID}/like`, {
      method: "POST",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to like thought");
        }
        return response.json();
      })
      .then((updatedThought) => {
        setHearts(updatedThought.hearts);
      })
      .catch((error) => {
        console.error("Error when liking thought", error);
        isClicked(false);
      });
  };

  return (
    <div>
      <button
        className="likes-button"
        onClick={handleLike}
        disabled={isClicked}
      >
        ❤️
      </button>
      <span> x {hearts}</span>
    </div>
  );
};
