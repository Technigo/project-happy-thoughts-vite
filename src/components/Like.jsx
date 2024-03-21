export const Like = ({ thoughtId, handleLike }) => {
  // Function for handling like action
  const handleLikeClick = () => {
    handleLike(thoughtId);
  };

  return (
    <button className="like-button" onClick={handleLikeClick}>
      💗
    </button>
  );
};
