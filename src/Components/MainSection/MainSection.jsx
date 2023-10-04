import { useEffect, useState } from "react";
import { Form } from "../Form";
import { Post } from "../Post";

import styles from "./MainSection.module.css";

export const MainSection = ({ posts, setPosts, error }) => {
  const [postLoading, setPostLoading] = useState(false);

  useEffect(() => {
    setPostLoading(true);
  }, [posts]);

  useEffect(() => {
    setTimeout(setPostLoading, 2000, false);
  }, [posts]);
  return (
    <main className={styles.main}>
      <Form onPosts={setPosts} />
      <div className={styles.list_wrapper}>
        {postLoading && (
          <div className={styles.loading_box}>
            <p>Loading</p>
            {Array.from({ length: 9 }, (_, i) => i + 1).map((num) => (
              <div
                key={num}
                className={`${styles.hearts} ${styles.hearts[num]}`}
                style={{ animationDelay: `0.${num}` * 2 + `s` }}
              >
                ❤️
              </div>
            ))}
          </div>
        )}
        {error.error && <div>error</div>}
        {!error.error &&
          posts.map((post) => (
            <Post key={post._id} post={post} postLoading={postLoading} posts={posts} />
          ))}
      </div>
    </main>
  );
};
