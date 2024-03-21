import PropTypes from "prop-types";
import "./Post.css";

const Post = ({ thought, onLike }) => {
  const { message, hearts } = thought;

  const handleLike = () => {
    onLike(thought._id);
  };

  return (
    <div className="postContainer">
      <p>{message}</p>
      <button onClick={handleLike} className="likeButton">
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
