import React, { useState, useEffect } from "react";
import { ShowMessage } from "./ShowMessage";
import { MessageInput } from "./MessageInput";
import "./Messages.css";

export const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null); // State to store fetch error
  const [isLoading, setIsLoading] = useState(false); // State to track loading status

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = () => {
    setIsLoading(true); // Set loading to true before fetch starts
    fetch("https://happy-thoughts-api-igwpvuz3lq-lz.a.run.app/thoughts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("- Could not load thoughts -");
        }
        return response.json();
      })
      .then((data) => {
        setMessages(data.slice(0, 20));
        setError(null); // Clear error if fetch is successful
        setIsLoading(false); // Set loading to false after fetch completes
      })
      .catch((error) => {
        setError(error.message); // Set error message in state
        setIsLoading(false); // Set loading to false after fetch completes
      });
  };

  const sendMessage = (inputValue) => {
    fetch("https://happy-thoughts-api-igwpvuz3lq-lz.a.run.app/thoughts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: inputValue }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("- Could not send your thought -");
        }
        return response.json();
      })
      .then(() => {
        fetchMessages();
      })
      .catch((error) => {
        setError(error.message); // Set error message in state
      });
  };

  const handleHeartClick = (index) => {
    // Optimistically increment hearts count for the selected message
    const updatedMessages = [...messages];
    updatedMessages[index].hearts += 1;
    setMessages(updatedMessages);

    // Extract the _id of the message
    const messageId = messages[index]._id;

    fetch(
      `https://happy-thoughts-api-igwpvuz3lq-lz.a.run.app/thoughts/${messageId}/like`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to send your heart");
        }
        return response.json(); // If needed, handle the updated data
      })
      .catch((error) => {
        console.error("Error updating hearts count:", error);
        setError(error.message); // Set error message in state

        // Revert to previous heart count on error
        const revertedMessages = [...messages];
        revertedMessages[index].hearts -= 1;
        setMessages(revertedMessages);
      });
  };

  return (
    <div className="App">
      <MessageInput sendMessage={sendMessage} setMessages={setMessages} />
      {isLoading ? (
        <p>Loading thoughts...</p>
      ) : (
        <ShowMessage
          messages={messages}
          handleHeartClick={handleHeartClick}
          error={error}
        />
      )}
    </div>
  );
};
