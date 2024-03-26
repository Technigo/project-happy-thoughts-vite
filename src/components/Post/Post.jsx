import { useState } from "react";
import "./post.css";

const apiUrl = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

export const Post = () => {
  const [message, setMessage] = useState([]);
  const [error, setError] = useState(null);

  //event handler to update input state
  const handleChange = (event) => {
    setMessage(event.target.value);
    setError(null); //reset error when message is changed
  };

  //calculate remaining characters
  const charactersLeft = 140 - message.length;

  //handle form submission
  const handlePostSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Set content type for JSON data
        },
        body: JSON.stringify({ message: message }), //convert message to json for the request body
      });
      if (!response.ok) {
        throw new Error("Couldn't fetch data!");
      }
      setMessage(""); //clear after successful submission
    } catch (error) {
      if (message.length < 5) {
        setError("Message must be at least 5 characters!");
      } else {
        setError("Couldn't post happy thought. Please try again.");
      }
    }
  };

  return (
    <section className="post-container">
      <form className="form-container" onSubmit={handlePostSubmit}>
        <label>
          <p>What&#39;s making you happy right now?</p>
          <textarea
            rows="3"
            maxLength="140"
            // render error message in textarea
            value={error ? error : message}
            onChange={handleChange}
            placeholder="A smile is the shortest distance between two people. - Victor Borge."
            required
          ></textarea>
        </label>
        <div className="character-count">
          <p>You have {charactersLeft} characters left for your message</p>
        </div>

        <button className="send-button" type="submit">
          <span id="hearts">❤️</span>
          <p>Send Happy Thought </p>
          <span id="hearts">❤️</span>
        </button>
      </form>
    </section>
  );
};
