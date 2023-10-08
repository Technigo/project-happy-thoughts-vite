import { useState, useEffect } from 'react';
import { PostMessage } from './Components/PostMessage/PostMessage';
import { MessageList } from './Components/MessageList/MessageList';


export const App = () => {

  //Store the posts
  const [posts, setPosts] = useState([]);
  // errors during fetch
  const [error, setError] = useState(null);

  //this is for when a new post is created
  const handleNewPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  const fetchPosts = async () => {
    try {
      const response = await fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts');
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.log('error', error);
    }
  };

  // This function fetch posts when component is mounted
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className='post-wrapper'>
      {/* <Header /> */}
      <PostMessage onNewPost={handleNewPost} />

    </div>
  );
};