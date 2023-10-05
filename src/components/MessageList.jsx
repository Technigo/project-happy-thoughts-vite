import React from "react";

export const MessageList = ({ messages, handleLike }) => {

  //Reversing the list of posted comments
  const reversedMessages = messages.slice().reverse();
  return (
    <div className="messageList">
      {reversedMessages.map((message, index) => (
        <div key={index} className="messageContainer">
          <div className="messageBox">
            <p className="messageText">{message.message}</p>
          </div>

          {/* heart button */}
          <div className="likeContainer">
            <button className="heartButton" onClick={() => handleLike(message._id)}>
              <img
                width="20"
                height="20"
                src="https://img.icons8.com/emoji/48/heart-suit.png"
                alt="heart-suit"
              />
            </button>
            <p className="likeCount"> X{message.hearts}</p>
          </div>

        </div>
      ))}
    </div>
  );
};
