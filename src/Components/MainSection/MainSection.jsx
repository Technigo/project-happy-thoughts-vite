import { useState, useEffect } from "react";
import { Form } from "../Form";
import { Post } from "../Post";
import styles from "./MainSection.module.css";

export const MainSection = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts");
        const data = await response.json();

        setPosts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
    const intervalId = setInterval(fetchData, 100000);
    return () => {
      clearInterval(intervalId); // Clean up the interval when the component unmounts.
    };
  }, []);
  return (
    <main className={styles.main}>
      <Form onPosts={setPosts} />
      <div className={styles.list_wrapper}>
        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </main>
  );
};
