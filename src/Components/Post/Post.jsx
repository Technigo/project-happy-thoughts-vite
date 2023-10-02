import { useEffect, useState } from "react";
import styles from "./Post.module.css";
export const Post = ({ post }) => {
  const [createdAt, setCreatedAt] = useState(0);
  const now = new Date();
  const past = new Date(post.createdAt);
  const min = (now - past) / (1000 * 60);
  const LessMin = min < 1;
  const oneMin = min === 1;
  const isMin = min <= 60;
  const isHour = createdAt === 1;

  useEffect(() => {
    min <= 60 ? setCreatedAt(Math.floor(min)) : setCreatedAt(Math.floor(min / 60));
  });

  return (
    <div className={styles.post_wrapper}>
      <p className={styles.text}>{post.message}</p>
      <div className={styles.info_box}>
        <div>
          <span className={styles.heart}>❤️ </span>
          <span>x {post.hearts}</span>
        </div>
        <div>
          <span className={styles.num}>
            {min <= 60 ? "" : "about "}
            {createdAt}
            {LessMin && "less than a minute ago"}
            {(!LessMin && oneMin ? "minute" : isMin ? " minutes" : isHour ? " hour " : " hours") +
              " ago"}
          </span>
        </div>
      </div>
    </div>
  );
};
