import { useEffect, useState } from "react";
import styles from "./Post.module.css";
export const Post = ({ post }) => {
  const [createdAt, setCreatedAt] = useState(0);
  const [likes, setLikes] = useState(post.hearts);
  const [clickLike, setClickLike] = useState(false);
  const now = new Date();
  const past = new Date(post.createdAt);
  const min = (now - past) / (1000 * 60);
  const LessMin = min < 0;
  const oneMin = min === 1;
  const isMin = min <= 60;
  const isHour = createdAt === 1;

  useEffect(() => {
    min > 1 && min <= 60 ? setCreatedAt(Math.floor(min)) : setCreatedAt(Math.floor(min / 60));
    console.log(post.hearts);
  }, []);

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
            className={`${styles.heart} ${clickLike ? "red" : ""} `}
            onClick={() => handleLikes(post._id)}
          >
            ❤️{" "}
          </button>
          <span>x {likes}</span>
        </div>
        <div>
          <span className={styles.num}>
            {createdAt < 0 && "less than a minute ago"}

            {(!LessMin && oneMin
              ? `${createdAt} minute`
              : isMin
              ? `${createdAt} minutes`
              : isHour
              ? `${createdAt} hour `
              : ` ${createdAt} hours`) + " ago"}
          </span>
        </div>
      </div>
    </div>
  );
};
