import PropTypes from "prop-types";
import ThoughtItem from "./ThoughtItem";
import styles from "./ThoughtList.module.css";

const ThoughtList = ({ thoughts, incrementLikedPostsCount }) => {
  return (
    <div className={styles.thoughtList}>
      {thoughts.map((thought) => (
        <ThoughtItem
          key={thought._id}
          thought={thought}
          incrementLikedPostsCount={incrementLikedPostsCount}
        />
      ))}
    </div>
  );
};

ThoughtList.propTypes = {
  thoughts: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
      hearts: PropTypes.number,
      createdAt: PropTypes.string,
    })
  ).isRequired,
  incrementLikedPostsCount: PropTypes.func.isRequired,
};

export default ThoughtList;
