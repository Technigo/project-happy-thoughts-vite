import React from "react";

export const HeartButton = ({ thought, onLike }) => {
  const handleLike = () => {
    fetch(
      `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thought._id}/like`,
      {
        method: "POST",
      }
    )
      .then(() => {
        onLike(thought._id); // Update the parent component's state
      })
      .catch((error) => console.error("Error liking thought:", error));
  };

  return (
    <div>
      <button className="heart" onClick={handleLike}>
        ❤️
      </button>
      x {thought.hearts}
    </div>
  );
};
