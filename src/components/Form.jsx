import PropTypes from "prop-types";
import { useState } from "react";

export const Form = ({ setThoughts, thoughts_URL, setFetched }) => {
  const [message, setMessage] = useState("");

  const handleSend = (event) => {
    event.preventDefault();
    setFetched(false);
    console.log("Message: ", message);
    console.log(thoughts_URL);

    const fetchOptions = {
      method: "POST",
      body: JSON.stringify({ message: message }),
      headers: { "Content-Type": "application/json" },
    };

    fetch(thoughts_URL, fetchOptions)
      .then((res) => res.json())
      .then((newThought) => {
        setThoughts((previousThoughts) => [newThought, ...previousThoughts]);
      })
      .catch((error) => {
        console.log(error);
      });

    setMessage("");
    setFetched(true);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="form">
      <p> What&apos;s making you happy right now?</p>
      <form>
        <textarea
          name="textarea"
          id="textForm"
          value={message}
          cols="20"
          rows="4"
          placeholder="Write here..."
          onChange={handleMessage}
        ></textarea>
        <button className="send-button" onClick={handleSend}>
          ❤️ Send Happy Thought ❤️
        </button>
      </form>
    </div>
  );
};

Form.propTypes = {
  thoughts_URL: PropTypes.string,
  setThoughts: PropTypes.func,
  setFetched: PropTypes.func,
};
