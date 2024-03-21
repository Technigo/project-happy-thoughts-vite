import PropTypes from "prop-types";
import styles from "./Counter.module.css";

const Counter = ({ likedNum, postedNum }) => {
  return (
    <div className={styles.interaction}>
      <div className={styles.item}>
        <h2 className={styles.counter}>{likedNum}</h2>
        <span title="Liked thoughts" className={styles.description}>
          ❤️
        </span>
      </div>
      <div className={styles.item}>
        <h2 className={styles.counter}>{postedNum}</h2>
        <span title="Sent thoughts" className={styles.description}>
          💌
        </span>
      </div>
    </div>
  );
};

export default Counter;

Counter.propTypes = {
  likedNum: PropTypes.number.isRequired,
  postedNum: PropTypes.number.isRequired,
};
