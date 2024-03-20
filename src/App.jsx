// App.jsx
import React from "react";
import { Message } from "./ShowMessage";
import { MessageInput } from "./MessageInput";

export const App = () => {
  const handleNewMessage = (newMessage) => {
    // Handle new message, if needed
    console.log("New message:", newMessage);
  };

  return (
    <div className="App">
      <MessageInput onNewMessage={handleNewMessage} />
      <Message />
    </div>
  );
};
