import all from "../assets/all_icon.png";
import { useThoughtStore } from "../stores/useThoughtStore";
import styles from "./Counter.module.css";

const Counter = () => {
  const { likedThoughts, sentThoughts, thoughts, setFilter } =
    useThoughtStore();
  const handleClick = event => {
    const filterType = event.target.title;
    setFilter(filterType);
  };

  return (
    <div className={styles.interaction}>
      <div className={styles.item}>
        <h2 className={styles.counter}>
          {likedThoughts ? likedThoughts.length : 0}
        </h2>
        <span
          onClick={handleClick}
          title="likes"
          className={styles.description}
        >
          ❤️
        </span>
      </div>
      <div className={styles.item}>
        <h2 className={styles.counter}>{thoughts ? thoughts.length : 0}</h2>
        <span onClick={handleClick} title="all" className={styles.description}>
          <img
            className={styles.allThoughts}
            src={all}
            alt="all thoughts icon"
          ></img>
        </span>
      </div>
      <div className={styles.item}>
        <h2 className={styles.counter}>
          {sentThoughts ? sentThoughts.length : 0}
        </h2>
        <span
          onClick={handleClick}
          title="posts"
          className={styles.description}
        >
          💌
        </span>
      </div>
    </div>
  );
};

export default Counter;
