import PropTypes from "prop-types";

const Post = ({ thought, onLike }) => {
  const { message, hearts } = thought;

  const handleLike = () => {
    onLike(thought._id);
  };

  return (
    <div>
      <p>{message}</p>
      <button
        onClick={handleLike}
        className={`likeButton ${hearts > 0 ? "active" : ""}`}
      >
        <span role="img" aria-label="Heart">
          ❤️
        </span>{" "}
      </button>
      <span className="likeCount">x {hearts}</span>
    </div>
  );
};

Post.propTypes = {
  thought: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    hearts: PropTypes.number.isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
  onLike: PropTypes.func.isRequired,
};

export default Post;
