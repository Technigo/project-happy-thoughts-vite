import React, { useState } from "react";

export const MessageInput = ({ onNewMessage }) => {
  const [inputValue, setInputValue] = useState("");

  //   const handleSubmit = async (event) => {
  //     event.preventDefault();
  //     if (!inputValue.trim()) return; // Prevent submitting empty messages

  //     try {
  //       const response = await fetch(
  //         "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts",
  //         {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify({ message: inputValue }),
  //         }
  //       );

  //       if (!response.ok) {
  //         throw new Error("Failed to send message");
  //       }

  //       const newMessage = await response.json();
  //       onNewMessage(newMessage); // Update the messages array in the parent component
  //       setInputValue(""); // Clear input field after submitting
  //     } catch (error) {
  //       console.error("Error sending message:", error);
  //     }
  //   };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!inputValue.trim()) return; // Prevent submitting empty messages

    fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: inputValue }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to send message");
        }
        return response.json();
      })
      .then((newMessage) => {
        onNewMessage(newMessage); // Update the messages array in the parent component
        setInputValue(""); // Clear input field after submitting
      })
      .catch((error) => {
        console.error("Error sending message:", error);
      });
  };

  return (
    <form className="messageForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type your message here..."
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
};
