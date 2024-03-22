import PropTypes from "prop-types";
import { useState } from "react";
import styles from "./ThoughtCard.module.css";

const ThoughtCard = ({
  message,
  likes,
  time,
  thoughtID,
  recordLikes,
  handleError,
}) => {
  const [hearts, setHearts] = useState(likes);
  const handleLike = () => {
    const newHearts = hearts + 1;
    fetch(
      `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thoughtID}/like`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ hearts: newHearts }),
      }
    )
      .then(res => {
        if (!res.ok) {
          throw new Error("Failed to update likes");
        }
        return res.json();
      })
      .then(newData => {
        recordLikes(thoughtID);
        setHearts(newData.hearts);
      })
      .catch(handleError);
  };

  return (
    <div className={styles.card}>
      <p className={styles.thought}>{message}</p>
      <div className={styles.messageinfo}>
        <div className={styles.hearts}>
          <button onClick={handleLike}>&#x2764;&#xfe0f;</button>
          <span>x {hearts}</span>
        </div>
        <div className={styles.time}>{time} ago</div>
      </div>
    </div>
  );
};

export default ThoughtCard;

ThoughtCard.propTypes = {
  message: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  time: PropTypes.string.isRequired,
  thoughtID: PropTypes.string.isRequired,
  recordLikes: PropTypes.func.isRequired,
  handleError: PropTypes.func.isRequired,
};
