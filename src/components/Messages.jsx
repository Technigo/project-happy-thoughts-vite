import React, { useState, useEffect } from "react";
import { ShowMessage } from "./ShowMessage";
import { MessageInput } from "./MessageInput";
import "./Messages.css";

export const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null); // State to store fetch error

  useEffect(() => {
    fetchMessages();
  }, []);

  // const fetchMessages = () => {
  //   fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts")
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("- Could not load thoughts -");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setMessages(data.slice(0, 20));
  //       setError(null); // Clear error if fetch is successful
  //     })
  //     .catch((error) => {
  //       setError(error.message); // Set error message in state
  //     });
  // };

  const fetchMessages = () => {
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
      })
      .catch((error) => {
        setError(error.message); // Set error message in state
      });
  };

  // const sendMessage = (inputValue) => {
  //   fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ message: inputValue }),
  //   })
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("- Could not send your thought -");
  //       }
  //       return response.json();
  //     })
  //     .then((newMessage) => {
  //       setMessages([newMessage, ...messages.slice(0, 19)]);
  //     })
  //     .catch((error) => {
  //       setError(error.message); // Set error message in state
  //     });
  // };

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
      .then((newMessage) => {
        setMessages([newMessage, ...messages.slice(0, 19)]);
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
        }
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
  

  // const handleHeartClick = (index) => {
  //   // Increment hearts count for the selected message
  //   const updatedMessages = [...messages];
  //   updatedMessages[index].hearts += 1;
  //   setMessages(updatedMessages);

  //   // Extract the _id of the message
  //   const messageId = messages[index]._id;

  //   fetch(
  //     `https://happy-thoughts-api-igwpvuz3lq-lz.a.run.app/thoughts/${messageId}/like`,

  //     {
  //       method: "PATCH",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   )
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Failed to send your heart");
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error updating hearts count:", error);
  //       setError(error.message); // Set error message in state
  //     });
  };

  // Call API to update hearts count
  //   fetch(
  //     `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${messageId}/like`,

  //     {
  //       method: "PATCH",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ messageId }), // Include message ID in the body
  //     }
  //   )
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Failed to send your heart");
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error updating hearts count:", error);
  //       setError(error.message); // Set error message in state
  //     });
  // };

  return (
    <div className="App">
      <MessageInput sendMessage={sendMessage} setMessages={setMessages} />
      <ShowMessage
        messages={messages}
        handleHeartClick={handleHeartClick}
        error={error}
      />
    </div>
  );
};
