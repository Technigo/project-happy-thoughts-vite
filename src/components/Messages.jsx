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
//       .then((thoughts) => {
//         // Fetch hearts data
//         fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/hearts")
//           .then((response) => {
//             if (!response.ok) {
//               throw new Error("Network response was not ok");
//             }
//             return response.json();
//           })
//           .then((hearts) => {
//             // Associate hearts count with each message using _id
//             const messagesWithHearts = thoughts.map((thought) => {
//               const heart = hearts.find((heart) => heart._id === thought._id);
//               return { ...thought, hearts: heart ? heart.hearts : 0 };
//             });
//             setMessages(messagesWithHearts.slice(0, 20));
//           })
//           .catch((error) => {
//             console.error("Error fetching hearts:", error);
//           });
//       })
//       .catch((error) => {
//         console.error("Error fetching thoughts:", error);
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
//         // Since hearts count for the new message is not available immediately,
//         // just add the message without hearts count and let the next fetch cycle update it
//         setMessages([newMessage, ...messages.slice(0, 19)]);
//       })
//       .catch((error) => {
//         console.error("Error sending message:", error);
//       });
//   };

//   return (
//     <div className="App">
//       <MessageInput sendMessage={sendMessage} setMessages={setMessages} />
//       <ShowMessage messages={messages} />
//     </div>
//   );
// };

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

  return (
    <div className="App">
      <MessageInput sendMessage={sendMessage} setMessages={setMessages} />
      <ShowMessage messages={messages} />
    </div>
  );
};
