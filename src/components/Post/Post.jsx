import { useState } from "react";
import "./post.css";

const apiUrl = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

export const Post = () => {
  //for new messages created/posted
  const [message, setMessage] = useState([]);

  //display an error if API can't be fetched
  const [error, setError] = useState(null);

  //event handler to update input state
  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  //calculate remaining characters
  const charactersLeft = 140 - message.length;
  // const changeTextColor = () => {
  //   return charactersLeft < 5 ? "red" : "black";
  // };

  //handle form submission
  const handlePostSubmit = async (event) => {
    event.preventDefault();

    setError(null); //reset error state before making the request

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

      console.log("Happy Thought posted!"); //delete later!
      setMessage(""); //clear after successful submission
    } catch (error) {
      setError("Message must be between 5 and 140 charaters!");
    }
  };

  return (
    <section className="post-container">
      <form className="form-container" onSubmit={handlePostSubmit}>
        <label>
          <p>What&#39;s making you happy right now?</p>
          <textarea
            rows="3"
            maxLength="160"
            value={message}
            onChange={handleChange}
            placeholder="A smile is the shortest distance between two people. - Victor Borge"
            required
          ></textarea>
        </label>
        <div className="character-count">
          <p>You have {charactersLeft} characters left for your message</p>
        </div>
        {error && <div className="error">{error}</div>}

        <button className="send-button" type="submit">
          <span id="hearts">❤️</span>
          <p>Send Happy Thought </p>
          <span id="hearts">❤️</span>
        </button>
      </form>
    </section>
  );
};
