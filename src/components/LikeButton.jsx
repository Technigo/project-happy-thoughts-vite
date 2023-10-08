// eslint-disable-next-line react/prop-types
export const LikeButton = ({ id, hearts, onLike }) => {
  const handleLike = () => {
    // Call the function passed as prop when the button is clicked
    onLike(id);
  };

  return (
    <div className="like-btn-wrapper">
      <button className="btn-style" onClick={handleLike}>
        <span className="btn-heart">❤️</span>
      </button>
      <span className="like-num">x {hearts}</span>
    </div>
  );
};
