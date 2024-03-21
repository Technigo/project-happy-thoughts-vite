import { useState } from "react";

export const Like = ({ thoughtId, handleLike }) => {
  const [clicked, setClicked] = useState(false);
  // Function for handling like action
  const handleLikeClick = () => {
    // Call the handleLike function to handle the like action
    handleLike(thoughtId);

    // Toggle the liked state
    setClicked(true);
    // Reset the clicked state after a short delay
    setTimeout(() => {
      setClicked(false);
    }, 800);
  };

  return (
    <button
      className={`like-button ${clicked ? "clicked" : ""}`}
      onClick={handleLikeClick}
    >
      💗
    </button>
  );
};
