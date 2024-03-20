import { useState } from "react";
import { Post } from "./Post";
import { useEffect } from "react";

export const Feed = () => {
  // here we are using the useState hook to be able to change the data
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log("useEffect");
    // here we are fetching the data from the API, code snippet I got from the weather app project and adjusted 
    fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts")
      .then((response) => response.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, []);

  return (
    <div>
      {posts.map((post) => (
        // here we are rendering the Post component
        <Post
          key={post._id}
          id={post._id}
          message={post.message}
          hearts={post.hearts}
          createdAt={post.createdAt}
        />
      ))}
    </div>
  );
};
