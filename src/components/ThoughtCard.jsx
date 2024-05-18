import PropTypes from "prop-types";
import { useRef } from "react";

import { useThoughtStore } from "../stores/useThoughtStore";
import styles from "./ThoughtCard.module.css";
import TimeDistance from "./TimeDistance";

const ThoughtCard = ({ thought }) => {
  const { likeThought, likedThoughts } = useThoughtStore();
  const thoughtID = thought._id;
  const hearts = useRef(thought.hearts);
  const handleLike = () => {
    if (likedThoughts.find(el => el._id === thoughtID)) {
      likeThought(thoughtID, "unlike");
      hearts.current--;
    } else {
      likeThought(thoughtID, "like");
      hearts.current++;
    }
  };

  return (
    <div className={styles.card}>
      <p className={styles.thought}>{thought.message}</p>
      <div className={styles.messageinfo}>
        <div className={styles.hearts}>
          <button
            onClick={handleLike}
            style={{
              backgroundColor: `${
                likedThoughts.find(el => el._id === thoughtID)
                  ? "#ffadad"
                  : "#eaeaea"
              }`,
            }}
          >
            &#x2764;&#xfe0f;
          </button>
          <span>x {hearts.current}</span>
        </div>
        <div className={styles.time}>{TimeDistance(thought.createdAt)} ago</div>
      </div>
    </div>
  );
};

export default ThoughtCard;

ThoughtCard.propTypes = {
  thought: PropTypes.object.isRequired,
};
