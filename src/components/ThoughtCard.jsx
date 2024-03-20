import PropTypes from "prop-types";
import { useState } from "react";
import styles from "./ThoughtCard.module.css";

const ThoughtCard = ({
  message,
  likes,
  time,
  thoughtID,
  cardIndex,
  recordLikes,
}) => {
  // const [like, setLike] = useState(likes);

  const [thought, setThought] = useState({
    _id: thoughtID,
    hearts: likes,
    message: message,
    createdAt: time,
    __v: 0,
  });

  const handleLike = event => {
    console.log("Thought id:", event.target.value);
    console.log("Card index:", event.target.id);
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
        setThought(prevThought => ({ ...prevThought, hearts: newData.hearts }));
        recordLikes(thoughtID);
        // setLike(newData.hearts);
      });
  };

  return (
    <div className={styles.card}>
      <p className={styles.thought}>{thought.message}</p>
      <div className={styles.messageinfo}>
        <div className={styles.hearts}>
          <button onClick={handleLike} id={cardIndex} value={thoughtID}>
            &#x2764;&#xfe0f;
          </button>
          <span>x {thought.hearts}</span>
        </div>
        <div className={styles.time}>{thought.createdAt} ago</div>
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
};
