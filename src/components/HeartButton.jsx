export const HeartButton = ({ thoughtId, hearts, handleHeartClick, isLiked }) => (
  <div className="heart-container">
    <button
      onClick={() => handleHeartClick(thoughtId)}
      className={isLiked ? "liked" : ""}
    >
      ❤️
    </button>
    <li>x {hearts}</li>
  </div>
);
