// App.jsx
import React, { useState, useEffect } from "react";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import PostMessage from "./Components/PostMassage";
import MessageList from "./Components/MessageList";

export const App = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Fetch messages from the API
    fetch("https://happy-thoughts-api-backend-45u2.onrender.com/thoughts")
      .then((res) => res.json())
      .then((data) => {
        setMessages(data);
      })
      .catch((error) => console.error("Error fetching messages:", error));
  }, []);

  const handleMessageSubmit = (message) => {
    fetch("https://happy-thoughts-api-backend-45u2.onrender.com/thoughts", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    })
      .then((res) => res.json())
      .then((newThought) => {
        setMessages((prevMessages) => [newThought, ...prevMessages]);
      })
      .catch((error) => console.error('Error submitting message:', error));
  };

  return (
    <div>
      <Header />
      <PostMessage onMessageSubmit={handleMessageSubmit} />
      {/* Render your list of messages here */}
      <MessageList messages={messages} /> {/* Pass messages as props to MessageList */}
      <Footer />
    </div>
  );
};

