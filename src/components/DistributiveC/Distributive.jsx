import { useState, useEffect } from "react";
import "./distributive.css";

import { Header } from "../HeaderC/Header";
import { Footer } from "../footer/Footer";

import { PostMessage } from "../PostMessageC/PostMessage";
import { MessageList } from "../MessageListC/MessageList";

export const Distributive = () => {
  // Declaring state `loading` and its updater function `setLoading`, initializing it with `false`
  const [loading, setLoading] = useState(false);

  // Declaring state `messageList` and its updater function `setMessageList`, initializing it with an empty array
  const [messageList, setMessageList] = useState([]);

  // Declaring a function `fetchPosts` to fetch posts from the API
  const fetchPosts = () => {
    setLoading(true);
    fetch("https://project-happy-thoughts-api-b1ab.onrender.com/thoughts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setMessageList(data))
      .catch((error) => {
        console.error("There was an error fetching the posts:", error);
        // Consider setting an error state here to show an error message in the UI
      })
      .finally(() => setLoading(false));
  };

  // Using `useEffect` hook to call `fetchPosts` once when the component mounts (due to the empty dependency array `[]`)
  useEffect(() => {
    fetchPosts();
  }, []);

  // Declaring a function `addNewPost` to update `messageList` state with a new message
  const addNewPost = (newMessage) => {
    // Updating `messageList` state by adding `newMessage` at the beginning of the array
    setMessageList([newMessage, ...messageList]);
  };

  // Returning JSX to render the component UI
  return (
    <div className="main-wrapper">
      {/* Rendering `PostMessage` component and passing `addNewPost` and `fetchPosts` as props */}
      <Header />
      <Footer />
      <PostMessage newMessage={addNewPost} fetchPosts={fetchPosts} />

      {loading ? (
        <p className="loading">Loading... ⏳</p>
      ) : (
        <MessageList messageList={messageList} fetchPosts={fetchPosts} />
      )}
    </div>
  );
};

export default MessageList;
