import PropTypes from "prop-types";

const Post = ({ thought, onLike }) => {
  const { message, hearts, createdAt } = thought;

  const handleLike = () => {
    onLike(thought._id);
  };

  const calculateTimeDifference = (createdAt) => {
    const currentTime = new Date();
    const postTime = new Date(createdAt);
    const timeDifference = Math.abs(currentTime - postTime) / 1000;

    if (timeDifference < 5) {
      return `${Math.round(timeDifference)} seconds ago`;
    } else if (timeDifference < 10) {
      return `10 seconds ago`;
    } else if (timeDifference < 20) {
      return `20 seconds ago`;
    } else if (timeDifference < 30) {
      return `30 seconds ago`;
    } else if (timeDifference < 60) {
      `${Math.round(timeDifference)} second${
        Math.round(timeDifference) === 1 ? "" : "s"
      } ago`;
    } else if (timeDifference < 3600) {
      return `${Math.round(timeDifference / 60)} minute${
        Math.round(timeDifference / 60) === 1 ? "" : "s"
      } ago`;
    } else if (timeDifference < 21600) {
      return `${Math.round(timeDifference / 3600)} hour${
        Math.round(timeDifference / 3600) === 1 ? "" : "s"
      } ago`;
    } else {
      return `${Math.round(timeDifference / 86400)} day${
        Math.round(timeDifference / 86400) === 1 ? "" : "s"
      } ago`;
    }
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
      <span className="timeAgo">{calculateTimeDifference(createdAt)}</span>
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
