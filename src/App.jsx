import { useState, useEffect } from 'react';
import { PostMessage } from './components/post-message/PostMessage';
import { MessageList } from './components/message-list/MessageList';
import { Header } from './components/header-component/Header';
// import { SingleMessage } from './components/single-message/SingleMessage';
// import { Header } from './components/Header';



export const App = () => {
  //Store the posts
  const [posts, setPosts] = useState([]);
  // error during fetch
  // const [error, setError] = useState(null);

  //this is for when a new post is created
  const handleNewPost = (newPost) => {
    setPosts([newPost, ...posts]);

  };
  // const handleNewPost = (post) => {
  //   setPosts((prev) => ([...prev, post]))
  // }

  const fetchPosts = async () => {
    try {
      const response = await fetch('https://happy-thoughts-api-evelyn.onrender.com/thoughts');
      const data = await response.json();
      console.log(data)
      setPosts(data);
    } catch (error) {
      console.error('error fetching posts', error);
    }
  };

  // This function fetch posts when component is mounted
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className='home'>

      <div className='post-wrapper'>
        <Header />
        <PostMessage newMessage={handleNewPost} fetchPosts={fetchPosts} />
        <MessageList posts={posts} fetchPosts={fetchPosts} />
      </div>
    </div>
  );
};