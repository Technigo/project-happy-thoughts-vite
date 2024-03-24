import PropTypes from "prop-types";
import { useState } from "react";

export const MessageInput = ({ messageData, setMessageData }) => {
  const [newMessage, setNewMessage] = useState("");

  const handlePost = (message) => {
    fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: message }),
    })
      .then((response) => response.json())
      .then((newMessage) => {
        setMessageData((previousMessages) => [newMessage, ...previousMessages]);
      })
      .catch((error) => console.log(error));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handlePost(newMessage);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        What&apos;s making you happy right now?
        <textarea
          placeholder="What are you happy about?"
          value={newMessage}
          onChange={(event) => setNewMessage(event.target.value)}></textarea>
      </label>
      <button>❤️ Send happy thought ❤️</button>
    </form>
  );
};

MessageInput.propTypes = {
  messageData: PropTypes.array,
  setMessageData: PropTypes.func,
};
