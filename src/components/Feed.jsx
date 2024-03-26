import PropTypes from "prop-types";
import ThoughtForm from "./ThoughtForm";
import ThoughtList from "./ThoughtList";
import styles from "./Feed.module.css";

const Feed = ({
  thoughts,
  addThought,
  incrementLikedPostsCount,
  likedPostsCount,
}) => {
  return (
    <main>
      <ThoughtForm addThought={addThought} />
      <div className={styles.likedPostsCount}>
        Liked Posts: {likedPostsCount}
      </div>
      <ThoughtList
        thoughts={thoughts}
        incrementLikedPostsCount={incrementLikedPostsCount}
      />
    </main>
  );
};

Feed.propTypes = {
  thoughts: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
      hearts: PropTypes.number,
      createdAt: PropTypes.string,
    })
  ).isRequired,
  addThought: PropTypes.func.isRequired,
  incrementLikedPostsCount: PropTypes.func.isRequired,
  likedPostsCount: PropTypes.number.isRequired,
};

export default Feed;
