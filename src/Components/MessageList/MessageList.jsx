import React, { useEffect } from "react";
import { SingleMessage } from "../SingleMessage/SingleMessage";

export const MessageList = ({ messageList, fetchPosts }) => {
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div className="list-wrapper">
      {messageList.map((message) => (
        <SingleMessage
          key={message._id}
          message={message}
          fetchPosts={fetchPosts}
        />
      ))}
    </div>
  );
};
