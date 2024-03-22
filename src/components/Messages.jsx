import React, { useState, useEffect } from "react";
import { ShowMessage } from "./ShowMessage";
import { MessageInput } from "./MessageInput";

export const Messages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = () => {
    fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Assuming 'createdAt' is a property in each message object
        setMessages(data.slice(0, 20));
      })
      .catch((error) => {
        console.error("Error fetching messages:", error);
      });
  };

  const sendMessage = (inputValue) => {
    fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/", {
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
        setMessages([newMessage, ...messages.slice(0, 19)]);
      })
      .catch((error) => {
        console.error("Error sending message:", error);
      });
  };

  const handleHeartClick = (index) => {
    // Increment hearts count for the selected message
    const updatedMessages = [...messages];
    updatedMessages[index].hearts += 1;
    setMessages(updatedMessages);

    // Extract the _id of the message
    const messageId = messages[index]._id;

    // Call API to update hearts count
    fetch(
      `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${messageId}/like`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messageId }), // Include message ID in the body
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update hearts count");
        }
      })
      .catch((error) => {
        console.error("Error updating hearts count:", error);
      });
  };

  return (
    <div className="App">
      <MessageInput sendMessage={sendMessage} setMessages={setMessages} />
      <ShowMessage messages={messages} handleHeartClick={handleHeartClick} />
    </div>
  );
};

// import React, { useState, useEffect } from "react";
// import { ShowMessage } from "./ShowMessage";
// import { MessageInput } from "./MessageInput";

// export const Messages = () => {
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     fetchMessages();
//   }, []);

//   const fetchMessages = () => {
//     fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setMessages(data.slice(0, 20));
//       })
//       .catch((error) => {
//         console.error("Error fetching messages:", error);
//       });
//   };

//   const sendMessage = (inputValue) => {
//     fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ message: inputValue }),
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to send message");
//         }
//         return response.json();
//       })
//       .then((newMessage) => {
//         setMessages([newMessage, ...messages.slice(0, 19)]);
//       })
//       .catch((error) => {
//         console.error("Error sending message:", error);
//       });
//   };

//   const handleHeartClick = (index) => {
//     // Increment hearts count for the selected message
//     const updatedMessages = [...messages];
//     updatedMessages[index].hearts += 1;
//     setMessages(updatedMessages);

//     // Extract the _id of the message
//     const messageId = messages[index]._id;

//     // Call API to update hearts count
//     fetch(
//       `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${messageId}/like`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ messageId }), // Include message ID in the body
//       }
//     )
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to update hearts count");
//         }
//       })
//       .catch((error) => {
//         console.error("Error updating hearts count:", error);
//       });
//   };

//   return (
//     <div className="App">
//       <MessageInput sendMessage={sendMessage} setMessages={setMessages} />
//       <ShowMessage messages={messages} handleHeartClick={handleHeartClick} />
//     </div>
//   );
// };
