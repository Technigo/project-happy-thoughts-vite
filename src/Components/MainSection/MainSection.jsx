import { useState, useEffect } from "react";
import { Form } from "../Form";
import { Post } from "../Post";
import { Loading } from "../Loading";
import { ErrorMessage } from "../ErrorMassage";
import styles from "./MainSection.module.css";

export const MainSection = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    // loading msaage is shown
    setIsLoad(true);
    setError(false);
    const fetchData = async () => {
      try {
        const response = await fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts");
        if (!response.ok) throw new Error("Could not get data");
        const data = await response.json();

        // to show loading message longer
        const setData = setTimeout(setPosts(data), 5000);
        return () => clearTimeout(setData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(true);
      } finally {
        setIsLoad(false);
      }
    };

    fetchData();

    // get api updated
    const intervalId = setInterval(fetchData, 100000);

    return () => {
      clearInterval(intervalId); // Clean up the interval when the component unmounts.
    };
  }, []);

  return (
    <main className={styles.main}>
      <Form onPosts={setPosts} />
      <div className={styles.list_wrapper}>
        {error.error && <ErrorMessage />}
        {isLoad && <Loading />}
        {!error.error && !isLoad && posts.map((post) => <Post key={post._id} post={post} />)}
      </div>
    </main>
  );
};
