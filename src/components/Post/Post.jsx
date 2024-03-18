import { useState } from "react";

import "./post.css";

export const Post = () => {
  //create variable to store user input (post)
  const [message, setMessage] = useState("");

  //create event handler to update state on input state
  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  //log message to console on button click
  const handleClick = () => {
    console.log("Happy Thought:", message);
  };

  return (
    <section className="postContainer">
      <form className="formContainer">
        <label>
          <p>What&#39;s making you happy right now?</p>
          <textarea
            type="text"
            id="post"
            rows="3"
            maxLength="140"
            value={message}
            onChange={handleChange}
            placeholder="A smile is the shortest distance between two people. - Victor Borge"
            required
          ></textarea>
        </label>
        <button className="sendButton" onClick={handleClick}>
          <span id="hearts">❤️</span>
          <p>Send Happy Thought </p>
          <span id="hearts">❤️</span>
        </button>
      </form>
    </section>
  );
};
