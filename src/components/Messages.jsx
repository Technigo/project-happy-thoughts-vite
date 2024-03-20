// Messages.jsx
import React, { useState } from "react";
import { Message } from "./ShowMessage";
import { MessageInput } from "./MessageInput";

export const Messages = () => {
  const [messages, setMessages] = useState([]);

  const handleNewMessage = (newMessage) => {
    setMessages([newMessage, ...messages.slice(0, 19)]);
  };

  return (
    <div className="App">
      <MessageInput onNewMessage={handleNewMessage} />
      <Message messages={messages} />
    </div>
  );
};
