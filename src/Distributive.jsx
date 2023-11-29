import { useEffect, useState } from "react";
import { PostMessage } from "./components/PostMessage";
import { MessageList } from "./components/MessageList";

export const Distributive = () => {
  const [loading, setLoading] = useState(false);
  const [messageList, setMessageList] = useState([]);

  const fetchPost = () => {
    setLoading(true);
    fetch("https://frida-project-happy-thought-api.onrender.com/thoughts")
      .then((res) => res.json())
      .then((data) => {
        setMessageList(data);
        console.log(data);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchPost();
  }, []);

  const addNewPost = (newMessage) => {
    setMessageList([newMessage, ...messageList]);
  };

  return (
    <div className="main-wrapper">
      <h1>Project Happy Thoughts</h1>
      <h2>By Frida Lindskog</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <PostMessage newMessage={addNewPost} fetchPosts={fetchPost} />
      )}
      <MessageList messageList={messageList} fetchPosts={fetchPost} />
    </div>
  );
};
