import React, { useState, useEffect } from "react";
import "./ShowMessage.css";

export const Message = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Define a function to fetch the messages from the API endpoint
    const fetchMessages = () => {
      fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setMessages(data.slice(0, 20)); // Slice the first 20 messages and set them in state
        })
        .catch((error) => {
          console.error("Error fetching messages:", error);
        });
    };

    // Call the fetchMessages function when the component mounts
    fetchMessages();

    // Clean-up function to prevent memory leaks
    return () => {
      // Cleanup code if needed
    };
  }, []);

  return (
    <div className="messageContainer">
      {messages.map((message, index) => (
        <p key={index} className="message">
          {message.message}
        </p>
      ))}
    </div>
  );
};
