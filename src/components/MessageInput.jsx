import React, { useState } from "react";
import PropTypes from "prop-types";
import "./MessageInput.css";

export const MessageInput = ({ sendMessage }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!inputValue.trim()) return; // Prevent submitting empty messages

    sendMessage(inputValue);
    setInputValue(""); // Clear input field after submitting
  };

  return (
    <div className="messageContainer">
      <form className="messageForm" onSubmit={handleSubmit}>
        <p>What's making you happy right now?</p>
        <input
          type="text"
          placeholder="Type your happy thought.."
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button type="submit">❤️ Send happy thought ❤️</button>
      </form>
    </div>
  );
};

MessageInput.propTypes = {
  sendMessage: PropTypes.func.isRequired,
};

// import React, { useState } from "react";
// import "./MessageInput.css";

// export const MessageInput = ({ sendMessage }) => {
//   const [inputValue, setInputValue] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (!inputValue.trim()) return; // Prevent submitting empty messages

//     fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts", {
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
//         sendMessage(newMessage); // Update messages locally
//         setInputValue(""); // Clear input field after submitting
//       })
//       .catch((error) => {
//         console.error("Error sending message:", error);
//       });
//   };

//   return (
//     <div className="messageContainer">
//       <form className="messageForm" onSubmit={handleSubmit}>
//         <p>What's making you happy right now?</p>
//         <input
//           type="text"
//           placeholder="Type your happy thought.."
//           value={inputValue}
//           onChange={(event) => setInputValue(event.target.value)}
//         />
//         <button type="submit">❤️ Send happy thought ❤️</button>
//       </form>
//     </div>
//   );
// };
