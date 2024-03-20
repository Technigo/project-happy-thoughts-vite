import { useState } from "react";

export const LikeButton = ({ likes, thoughtID, apiUrl }) => {
  const [hearts, setHearts] = useState(likes);
  const [isClicked, setIsClicked] = useState(false);

  const handleLike = () => {
    setIsClicked(true);
    fetch(`${apiUrl}/${thoughtID}/like`, {
      method: "POST",
    })
      .then((response) => response.json())
      .then(() => {
        setHearts((previousLikes) => previousLikes + 1);
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
