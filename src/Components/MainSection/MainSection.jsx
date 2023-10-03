import { Form } from "../Form";
import { Post } from "../Post";
import { ErrorMessage } from "../ErrorMassage";
import styles from "./MainSection.module.css";

export const MainSection = ({ posts, setPosts, error }) => {
  return (
    <main className={styles.main}>
      <Form onPosts={setPosts} />
      <div className={styles.list_wrapper}>
        {error.error && <ErrorMessage />}

        {!error.error && posts.map((post) => <Post key={post._id} post={post} />)}
      </div>
    </main>
  );
};
