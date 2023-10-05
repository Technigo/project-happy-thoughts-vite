import React, { useState } from "react";
import "./index.css";
import "./components/styleForm.css";
import { HeaderText } from "./components/header.jsx";
import { PostMessage } from "./components/PostMessage";
import { MessageList } from "./components/MessageList";

// State to store messages
export const App = () => {
  const [messages, setMessages] = useState(() => {
    const storedMessages = localStorage.getItem("messages");
    return storedMessages ? JSON.parse(storedMessages) : [];
  });


  const addNewMessage = (message) => {
    setMessages([...messages, message]); // Add the new message to the list
    setMessages(newMessages);

    localStorage.setItem("messages", JSON.stringify(newMessages));
  };

  //fetch like API and initialize count 
  const handleLike = async (thoughtId) => {
    try {
      await fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thoughtId}/like`, {
        method: "POST",
      });
      const updatedMessages = messages.map((message) => {
        if (message._id === thoughtId) {
          return {
            ...message,
            hearts: message.hearts + 1,
          };
        }
        return message;
      });

      setMessages(updatedMessages);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <>
      <HeaderText />
      <PostMessage newMessage={addNewMessage} />
      <MessageList messages={messages} handleLike={handleLike} /> {/* Passes the messages and like as props */}
    </>
  );
};
