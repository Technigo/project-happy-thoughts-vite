import React, { useState } from "react";
import "./index.css";
import "./components/styleForm.css";
import { HeaderText } from "./components/header.jsx";
import { PostMessage } from "./components/PostMessage";
import { MessageList } from "./components/MessageList";

export const App = () => {
  const [messages, setMessages] = useState([]); // State to store messages

  const addNewMessage = (message) => {
    setMessages([...messages, message]); // Add the new message to the list
  };

  return (
    <>
      <HeaderText />
      <PostMessage newMessage={addNewMessage} />
      <MessageList messages={messages} /> {/* Pass the messages as a prop */}
    </>
  );
};
