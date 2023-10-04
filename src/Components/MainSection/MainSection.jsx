import { useEffect, useState } from "react";
import { Form } from "../Form";
import { Post } from "../Post";

import styles from "./MainSection.module.css";

export const MainSection = ({ posts, setPosts, error, windowLoad }) => {
  const [postLoading, setPostLoading] = useState(false);
  const [firstLoad, setFirstLoad] = useState(false);

  useEffect(() => {
    setPostLoading(true);
    setFirstLoad(false);
  }, [posts]);

  useEffect(() => {
    setTimeout(setPostLoading, 5000, false);
  }, [posts]);

  useEffect(() => {
    setFirstLoad(true);
  }, [windowLoad]);
  return (
    <main className={styles.main}>
      <Form onPosts={setPosts} />
      <div className={styles.list_wrapper}>
        {error.error && <div>error</div>}
        {!error.error &&
          posts.map((post) => (
            <Post
              key={post._id}
              post={post}
              postLoading={postLoading}
              posts={posts}
              firstLoad={firstLoad}
            />
          ))}
      </div>
    </main>
  );
};
