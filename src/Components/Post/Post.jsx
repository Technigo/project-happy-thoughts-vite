import { useEffect, useState } from "react";
import styles from "./Post.module.css";

export const Post = ({ post, postLoading, posts, firstLoad }) => {
  const [createdAt, setCreatedAt] = useState(0);
  const [likes, setLikes] = useState(post.hearts);
  const [clickLike, setClickLike] = useState({ clicked: false, count: 0, id: "" });
  const [isHour, setIsHour] = useState(false);
  const [isDay, setIsDay] = useState(false);
  const [error, setError] = useState(false);
  const [currentPost, setCurrentPost] = useState(false);

  // To calc when a post is posed
  const now = new Date();
  const past = new Date(post.createdAt);
  const min = (now - past) / (1000 * 60);

  // Calc how much time passed from posting
  useEffect(() => {
    if (min > 1 && min <= 60) {
      setCreatedAt(Math.floor(min));
    } else if (min > 60 && min < 1440) {
      setIsHour(true);
      setCreatedAt(Math.floor(min / 60));
    } else if (min < 1) {
      setCreatedAt(0);
    } else if (min > 1440) {
      createdAt(Math.floor(min / 1440));
      setIsDay(true);
    }
  }, [isHour, createdAt, min]);

  // getting data from local storage
  useEffect(() => {
    const totalLikes = { ...localStorage };
    Object.keys(totalLikes).map((el) => {
      if (el === post._id) {
        return setClickLike({ clicked: true, count: totalLikes[el], id: el });
      }
    });
  }, []);

  // storing data to a local storage
  useEffect(() => {
    localStorage.setItem(clickLike.id, clickLike.count);
  }, [clickLike]);

  // to make a delay for posting a new post
  useEffect(() => {
    !firstLoad && posts[0]._id === post._id && setCurrentPost(true);
  }, [postLoading, posts, post, firstLoad]);

  useEffect(() => {
    !postLoading && setCurrentPost(false);
  }, [postLoading]);
  console.log(clickLike);
  // Post likes when a heart button is clicked to api
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
      setLikes((l) => l + 1);
      setError(false);
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };

  const handleLikes = (id) => {
    postLikes(id);
    setClickLike((c) => ({
      clicked: true,
      count: c.count + 1,
      id: id,
    }));
  };
  return (
    <div className={styles.post_wrapper}>
      {currentPost && (
        <div className={styles.loading_box}>
          <p>Loading</p>
          {Array.from({ length: 9 }, (_, i) => i + 1).map((num) => (
            <span
              key={num}
              className={styles.hearts}
              style={{ animationDelay: `0.${num}` * 2 + `s` }}
            >
              ❤️
            </span>
          ))}
        </div>
      )}
      {!currentPost && (
        <>
          <p className={styles.text}>{post.message}</p>
          <div className={styles.info_box}>
            <div className={styles.like_box}>
              <button
                className={`${styles.heart} ${clickLike.clicked ? styles.red : ""} `}
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
                {createdAt === 0 && !isDay && "less than a minute ago"}

                {createdAt !== 0 &&
                  !isHour &&
                  !isDay &&
                  (createdAt === 1 ? `${createdAt} minute` : `${createdAt} minutes`) + " ago"}

                {createdAt !== 0 &&
                  isHour &&
                  !isDay &&
                  (createdAt === 1 ? `${createdAt} hour` : `${createdAt} hours`) + " ago"}
                {isDay && (createdAt === 1 ? `${createdAt} day` : `${createdAt} days`) + " ago"}
              </span>
            </div>
          </div>{" "}
        </>
      )}
      <p className={styles.yourLike}>You clicked x {clickLike.count}</p>
    </div>
  );
};
