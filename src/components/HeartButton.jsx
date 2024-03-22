import PropTypes from "prop-types";

export const HeartButton = ({ likes, onLike }) => {
  const addLike = () => {
    onLike();
    console.log("Hello!");
  };

  return (
    <>
      <button onClick={addLike}>❤️</button>
      <p> x {likes}</p>
    </>
  );
};

HeartButton.propTypes = {
  likes: PropTypes.number,
  onLike: PropTypes.func,
};
