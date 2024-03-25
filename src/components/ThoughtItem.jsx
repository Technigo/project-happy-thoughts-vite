import PropTypes from "prop-types";
import { useState } from "react";
import styles from "./ThoughtItem.module.css";

const ThoughtItem = (props) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(props.thought.hearts);

  const handleLike = () => {
    if (isLiked) {
      return;
    }

    fetch(
      `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${props.thought._id}/like`,
      {
        method: "POST",
      }
    )
      .then((response) => {
        if (response.ok) {
          setIsLiked(true);
          setLikeCount(likeCount + 1);
        } else {
          throw new Error("Error.");
        }
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

  const timeSincePosted = (dateString) => {
    const now = new Date();
    const postedDate = new Date(dateString);
    const secondsPast = (now - postedDate) / 1000;

    if (secondsPast < 60) {
      return Math.round(secondsPast) === 1
        ? "1 second ago"
        : `${Math.round(secondsPast)} seconds ago`;
    }

    const minutesPast = secondsPast / 60;
    if (minutesPast < 60) {
      return Math.round(minutesPast) === 1
        ? "1 minute ago"
        : `${Math.round(minutesPast)} minutes ago`;
    }

    const hoursPast = minutesPast / 60;
    if (hoursPast < 24) {
      return Math.round(hoursPast) === 1
        ? "1 hour ago"
        : `${Math.round(hoursPast)} hours ago`;
    }

    const daysPast = hoursPast / 24;
    return Math.round(daysPast) === 1
      ? "1 day ago"
      : `${Math.round(daysPast)} days ago`;
  };

  return (
    <div className={styles.thoughtItem}>
      <p className={styles.thoughtMessage}>{props.thought.message}</p>
      <div className={styles.thoughtActions}>
        <div className={styles.likes}>
          <button
            className={`${styles.thoughtLike} ${
              isLiked ? styles.thoughtLiked : ""
            } `}
            onClick={handleLike}
          >
            ❤️
          </button>
          <span>× {likeCount}</span>
        </div>
        <p className={styles.timeSincePosted}>
          {timeSincePosted(props.thought.createdAt)}
        </p>
      </div>
    </div>
  );
};

ThoughtItem.propTypes = {
  thought: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    hearts: PropTypes.number.isRequired,
    createdAt: PropTypes.string.isRequired,
  }),
};

export default ThoughtItem;
