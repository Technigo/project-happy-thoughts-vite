import React from "react";

export const MessageList = ({ messages }) => {
  const reversedMessages = messages.slice().reverse();
  return (
    <div className="messageList">
      {reversedMessages.map((message, index) => (
        <div key={index} className="messageContainer">
          <div className="messageBox">
            <p className="messageText">{message.message}</p>
          </div>
          <button className="heartButton">
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/emoji/48/heart-suit.png"
              alt="heart-suit"
            />
          </button>
        </div>
      ))}
    </div>
  );
};
