import { useEffect, useState } from "react";
import styles from "./Post.module.css";
export const Post = ({ post }) => {
  const [createdAt, setCreatedAt] = useState(0);
  const [likes, setLikes] = useState(post.hearts);
  const [clickLike, setClickLike] = useState(false);
  const [isHour, setIsHour] = useState(false);
  const now = new Date();
  const past = new Date(post.createdAt);
  const min = (now - past) / (1000 * 60);

  useEffect(() => {
    if (min > 1 && min <= 60) {
      setCreatedAt(Math.floor(min));
    } else if (min > 60) {
      setIsHour(true);
      setCreatedAt(Math.floor(min / 60));
    } else if (min < 1) {
      setCreatedAt(0);
    }
    console.log(createdAt, min > 60, min);
  }, [isHour, createdAt, min]);

  const postLikes = async (id) => {
    try {
      const res = await fetch(
        `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${id}/like`,
        {
          method: "POST",
        }
      );
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLikes = (id) => {
    postLikes(id);
    setLikes((l) => l + 1);
    setClickLike(true);
    console.log(clickLike);
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
        <div>
          <span className={styles.num}>
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
