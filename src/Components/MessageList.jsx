import React, { useEffect } from "react";
import { SingleMessage } from "./SingleMessage.jsx";

export const MessageList = ({ messageList, fetchThoughts }) => { // Updated to fetchThoughts
  useEffect(() => {
    fetchThoughts(); // This should match the prop name passed from App.jsx
  }, [fetchThoughts]); // Adding fetchThoughts as a dependency to useEffect

  return (
    <div className="list-wrapper">
      {messageList.map((message) => (
        <SingleMessage
          key={message._id}
          message={message}
          fetchThoughts={fetchThoughts} // Ensure this is also correctly named if you're passing it down
        />
      ))}
    </div>
  );
};