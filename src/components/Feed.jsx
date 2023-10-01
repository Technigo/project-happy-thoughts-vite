import { useState } from "react";
import { PostMessage } from "./PostMessage";

export const Feed = () => {
  const [loading, setLoading] = useState(false);
  const [thoughts, setThoughts] = useState([]);
  const apiUrl = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";
  const fetchPosts = () => {
    // Fetch recent thoughts, this will return the latest 20 thoughts from API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((json) => setThoughts(json))
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="post-wrapper">
      <PostMessage fetchPosts={fetchPosts} />
    </div>
  );
};
