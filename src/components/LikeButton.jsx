import { useState } from "react";

export const LikeButton = ({ likes, thoughtID, apiUrl }) => {
  const [hearts, setHearts] = useState(likes);

  const handleLike = () => {
    fetch(`${apiUrl}/${thoughtID}/like`, {
      method: "POST",
    })
      .then((response) => response.json())
      .then(() => {
        setHearts((previousLikes) => previousLikes + 1);
      })

      .catch((error) => console.error("Error when liking thought", error));
  };

  return (
    <div>
      <button className="likes-button" onClick={handleLike}>
        ❤️
      </button>
      <span>Likes: {hearts}</span>
    </div>
  );
};
