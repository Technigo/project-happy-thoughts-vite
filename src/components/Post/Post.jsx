import { useState } from "react";
import "./post.css";

const apiUrl = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

export const Post = () => {
  //create state to hold user input, loading and error message
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //create event handler to update state on input state
  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  //handle form submission
  const handlePostSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setError(null); //reset error state before making the request

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Set content type for JSON data
        },
        body: JSON.stringify({ message }), //convert message to json for the request body
      });
      if (!response.ok) {
        throw new Error("Something didn't go to plan!");
      }
      console.log("Happy Thought posted!"); //delete later?
      setMessage(""); //clear after successful submission
    } catch (error) {
      setError("Something didn't go to plan. Try again later!");
    }
    setLoading(false);
  };

  return (
    <section className="postContainer" onSubmit={handlePostSubmit}>
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
        {error && <div className="error">{error}</div>}
        <button className="sendButton" type="submit" disabled={loading}>
          <span id="hearts">❤️</span>
          <p>Send Happy Thought </p>
          <span id="hearts">❤️</span>
        </button>
      </form>
    </section>
  );
};
