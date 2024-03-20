import "./heartButton.css";

// eslint-disable-next-line react/prop-types
export const HeartButton = ({ heartsCount, updateHeartsCount }) => {
  const handleLike = () => {
    //call updateHeartsCount to increment the hearts count
    updateHeartsCount(heartsCount + 1);
  };

  return (
    <button className="heart" onClick={handleLike}>
      ❤️
    </button>
  );
};
