import { useState, useEffect } from "react";
import { Form } from "../Form";
import { Post } from "../Post";

export const MainSection = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts");
        const data = await response.json();
        console.log(data);
        setPosts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
    // const intervalId = setInterval(fetchData, 100000);
    // return () => {
    //   clearInterval(intervalId); // Clean up the interval when the component unmounts.
    // };
  }, []);
  return (
    <main>
      <Form />
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </main>
  );
};
