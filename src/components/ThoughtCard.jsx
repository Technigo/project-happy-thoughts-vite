import PropTypes from "prop-types";
import { useState } from "react";
import styles from "./ThoughtCard.module.css";

const ThoughtCard = ({ message, likes, time, thoughtID }) => {
  const [like, setLike] = useState(likes);

  const handleLike = event => {
    console.log(event.target.id);
    const newLikeNum = likes + 1;
    console.log("New like number: ", newLikeNum);

    fetch(
      `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thoughtID}/like`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ hearts: newLikeNum }),
      }
    )
      .then(res => res.json())
      .then(newData => {
        console.log(newData);
        setLike(newData.hearts);
      });
  };

  return (
    <div className={styles.card}>
      <p>{message}</p>
      <div className={styles.messageinfo}>
        <div className={styles.hearts}>
          <button onClick={handleLike} id={thoughtID}>
            &#x2764;&#xfe0f;
          </button>
          <span>x {like}</span>
        </div>
        <div className={styles.time}>{time}</div>
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
};
