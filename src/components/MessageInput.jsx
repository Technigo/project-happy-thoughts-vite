import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { countCharacters } from "../helpers/countCharacters";

export const MessageInput = ({ setMessageData }) => {
  const [newMessage, setNewMessage] = useState("");
  const [numberOfCharacters, setNumberOfCharacters] = useState();

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
    setNewMessage("");
  };

  useEffect(() => setNumberOfCharacters(countCharacters(newMessage)), [newMessage]);

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
      <p className={numberOfCharacters > 140 ? "error-color" : ""}>Typed characters: {numberOfCharacters}</p>
    </form>
  );
};

MessageInput.propTypes = {
  setMessageData: PropTypes.func,
};
