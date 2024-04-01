import { useState, useEffect } from "react";
import { PostThought } from "./Components/PostThought";
import { MessageList } from "./Components/MessageList";
import "./index.css"

export const App = () => {
  const [messageList, setMessageList] = useState([]);
  const [loading, setLoading] = useState(false);

const fetchThoughts = async () => {
  try {
    setLoading(true);
    const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/thoughts`);
    const data = await response.json();
    setMessageList(data);
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};
  
  return (
    <div className="main-wrapper">
      <PostThought fetchPosts={fetchPosts} />
      <MessageList messageList={messageList} fetchPosts={fetchPosts} />
    </div>
  );
};