import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { countCharacters } from "../helpers/countCharacters";

export const MessageInput = ({ setLoading, setMessageData }) => {
  const [newMessage, setNewMessage] = useState("");
  const [loadNewMessage, setLoadNewMessage] = useState(false);
  const [numberOfCharacters, setNumberOfCharacters] = useState(0);
  const [tooFewCharacters, setTooFewCharacters] = useState(false);
  const [tooManyCharacters, setTooManyCharacters] = useState(false);

  const handlePost = (message) => {
    setLoadNewMessage(true);
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

  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
    setLoadNewMessage(false);
  }, [loadNewMessage, setLoading]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (numberOfCharacters > 140 || numberOfCharacters < 5) {
      setTooFewCharacters(numberOfCharacters < 5);
      setTooManyCharacters(numberOfCharacters > 140);
    } else {
      handlePost(newMessage);
      setNewMessage("");
      setTooFewCharacters(false);
      setTooManyCharacters(false);
    }
  };

  useEffect(() => {
    setNumberOfCharacters(countCharacters(newMessage));
  }, [newMessage]);

  return (
    <form onSubmit={handleSubmit}>
      <label>
        What&apos;s making you happy right now?
        <textarea
          placeholder="What are you happy about?"
          value={newMessage}
          onChange={(event) => {
            setNewMessage(event.target.value);
            setTooFewCharacters(false);
            setTooManyCharacters(false);
          }}></textarea>
      </label>
      <p className={numberOfCharacters > 140 ? "error-color" : ""}>Typed characters: {numberOfCharacters}</p>
      {tooFewCharacters && <p>oops .. too few characters, try again ❤️</p>}
      {tooManyCharacters && <p>oops .. too many characters, try again ❤️</p>}
      <button>❤️ Send happy thought ❤️</button>
    </form>
  );
};

MessageInput.propTypes = {
  setMessageData: PropTypes.func,
  setLoading: PropTypes.func,
};
