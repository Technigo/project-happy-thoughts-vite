import { useEffect, useState } from "react";
import { PostMessage } from "./Components/PostMessage";
import { MessageList } from "./Components/MessageList";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [messageList, setMessageList] = useState([]);

  const fetchPost = () => {
    setLoading(true);
    fetch("https://happy-thoughts-api-backend-45u2.onrender.com/thoughts")
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
      <Header/>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <PostMessage newMessage={addNewPost} fetchPosts={fetchPost} />
      )}
      <MessageList messageList={messageList} fetchPosts={fetchPost} />
      <Footer/>
    </div>
  );
};


