import { useState, useEffect } from 'react';
import { PostMessage } from "./Components/PostMessage";


export const App = () => {

  return (

    //Store the posts
    const [posts, setPosts] = usestate([]);
  // errors during fetch
  const [error, setError] = useState = usestate(null);

  )
};

useEffect(() => {
  fetchPosts();
}, []);

