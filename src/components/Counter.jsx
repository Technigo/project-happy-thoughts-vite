import PropTypes from "prop-types";
import styles from "./Counter.module.css";
import all from "../assets/all_icon.png";

const Counter = ({ likedNum, postedNum, onClick }) => {
  return (
    <div className={styles.interaction}>
      <div className={styles.item}>
        <h2 className={styles.counter}>{likedNum}</h2>
        <span
          onClick={onClick}
          title="Liked thoughts"
          className={styles.description}
        >
          ❤️
        </span>
      </div>
      <div className={styles.item}>
        <h2 className={styles.counter}>20</h2>
        <span
          onClick={onClick}
          title="All thoughts"
          className={styles.description}
        >
          <img
            className={styles.allThoughts}
            src={all}
            alt="all thoughts icon"
          ></img>
        </span>
      </div>
      <div className={styles.item}>
        <h2 className={styles.counter}>{postedNum}</h2>
        <span
          onClick={onClick}
          title="Sent thoughts"
          className={styles.description}
        >
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
