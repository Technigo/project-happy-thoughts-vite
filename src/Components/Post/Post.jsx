import { useEffect, useState } from "react";
import styles from "./Post.module.css";

export const Post = ({ post }) => {
  const [createdAt, setCreatedAt] = useState(0);
  const [likes, setLikes] = useState(post.hearts);
  const [clickLike, setClickLike] = useState(false);
  const [isHour, setIsHour] = useState(false);
  const [error, setError] = useState(false);

  // To calc when a post is posed
  const now = new Date();
  const past = new Date(post.createdAt);
  const min = (now - past) / (1000 * 60);

  // Calc how much time passed from posting
  useEffect(() => {
    if (min > 1 && min <= 60) {
      setCreatedAt(Math.floor(min));
    } else if (min > 60) {
      setIsHour(true);
      setCreatedAt(Math.floor(min / 60));
    } else if (min < 1) {
      setCreatedAt(0);
    }
  }, [isHour, createdAt, min]);

  // Post likes when a heart button is clicked to api
  const postLikes = async (id) => {
    try {
      const res = await fetch(
        `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${id}/likes`,
        {
          method: "POST",
        }
      );
      const data = await res.json();
      console.log(data);
      setLikes((l) => l + 1);
      setError(false);
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };

  const handleLikes = (id) => {
    postLikes(id);
    setClickLike(true);
  };

  return (
    <div className={styles.post_wrapper}>
      <p className={styles.text}>{post.message}</p>
      <div className={styles.info_box}>
        <div>
          <button
            className={`${styles.heart} ${clickLike ? styles.red : ""} `}
            onClick={() => handleLikes(post._id)}
          >
            ❤️{" "}
          </button>
          <span>x {likes}</span>
        </div>

        <div className={styles.num_box}>
          {/* If there is something wrong with posting likes then this will show up */}
          {error ? <p className={styles.error}>🤡 Something went wrong...</p> : ""}
          <span className={styles.num}>
            {/* This conditional expressions are to show each message depens on min/hours/so on. */}
            {createdAt === 0 && "less than a minute ago"}

            {createdAt !== 0 &&
              !isHour &&
              (createdAt === 1 ? `${createdAt} minute` : `${createdAt} minutes`) + " ago"}

            {createdAt !== 0 &&
              isHour &&
              (createdAt === 1 ? `${createdAt} hour` : `${createdAt} hours`) + " ago"}
          </span>
        </div>
      </div>
    </div>
  );
};
