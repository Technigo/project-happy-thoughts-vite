// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

const MessageList = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = () => {
    fetch('https://happy-thoughts-api-backend-45u2.onrender.com/thoughts')
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch((error) => console.error('Error fetching messages:', error));
  };

  const handleLike = (messageId) => {
    fetch(`https://happy-thoughts-api-backend-45u2.onrender.com/thoughts/${messageId}/like`, {
      method: 'POST',
    })
      .then((res) => res.json())
      .then((updatedMessage) => {
        setMessages((prevMessages) =>
          prevMessages.map((message) =>
            message._id === updatedMessage._id ? updatedMessage : message
          )
        );
      })
      .catch((error) => console.error('Error liking message:', error));
  };
  

  return (
    <div className="message-list">
      {messages.map((message) => (
        <div key={message._id}>
          <p>{message.message}</p>
          <button onClick={() => handleLike(message._id)} aria-label="Like message">
            ❤️ {message.hearts}
          </button>
        </div>
      ))}
    </div>
  );
};

export default MessageList;

