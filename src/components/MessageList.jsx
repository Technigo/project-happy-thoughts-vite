import React from "react";
import { formatDistanceToNow } from "date-fns";

export const MessageList = ({ messages, handleLike }) => {

  const formatTimeDifference = (timestamp) => {
    const currentTime = new Date();
    const messageTime = new Date(timestamp);
    return formatDistanceToNow(messageTime, { addSuffix: true }); // Display time difference in a friendly format
  };

  return (
    <div className="messageList">
      {messages.map((message, index) => (
        <div key={index} className="messageContainer">
          <div className="messageBox">
            <p className="messageText">{message.message}</p>
          </div>
          <div className="likeContainer">
            <button className="heartButton" onClick={() => handleLike(message._id)}>
              <img
                width="20"
                height="20"
                src="https://img.icons8.com/emoji/48/heart-suit.png"
                alt="heart-suit"
              />
            </button>

            <div className="infoText">
              <p className="likeCount">x{message.hearts}</p>
              <p className="messageTime">{formatTimeDifference(message.createdAt)}</p></div>
          </div>
        </div>
      ))}
    </div>
  );
};
