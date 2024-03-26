import "./heartButton.css";

// eslint-disable-next-line react/prop-types
export const HeartButton = ({ heartsCount, updateHeartsCount }) => {
  const handleLike = () => {
    //call updateHeartsCount to increment the hearts count
    updateHeartsCount(heartsCount + 1);
  };

  return (
    <button
      className={heartsCount === 0 ? "heart" : "heart-pink"} // Apply class conditionally
      onClick={handleLike}
    >
      ❤️
    </button>
  );
};
