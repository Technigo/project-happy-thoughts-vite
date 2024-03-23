import { useState } from "react";
import PropTypes from "prop-types";

const NewThoughtForm = ({ onNewThought }) => {
  const [message, setMessage] = useState("");
  const [count, setCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    postNewThought();
  };

  const handleChange = (event) => {
    setMessage(event.target.value);
    setCount(event.target.value.length);
  };

  const postNewThought = () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: message }),
    };
    fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts", options)
      .then((response) => response.json())
      .then((response) => {
        onNewThought(response);
        setMessage("");
      });
  };

  return (
    <div className="post-form-container">
      <form
        className="post-form"
        method="post"
        value={message}
        onSubmit={handleSubmit}
      >
        <header>What is making you happy rigth now? </header>
        <textarea
          placeholder="Only happy thoughts here..."
          type="text"
          name="postContent"
          rows={4}
          cols={40}
          value={message}
          maxLength={"140"}
          onChange={handleChange}
        />
        <div
          className={`character-count ${
            count >= 140 ? "character-count--error" : undefined
          }`}
        >
          <span id="current">{count}</span>
          <span id="maximum">/{140 - count} </span>
        </div>
        <button className="submit-button" type="submit">
          💗 Send Happy Thought 💗
        </button>
      </form>
    </div>
  );
};

export default NewThoughtForm;

NewThoughtForm.propTypes = {
  onNewThought: PropTypes.func.isRequired,
};
