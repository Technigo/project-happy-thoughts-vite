import { useState } from "react";
import "./post.css";
import { Loading } from "../Loading/Loading";

const apiUrl = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

export const Post = () => {
  //for new messages created/posted
  const [message, setMessage] = useState([]);
  const [loading, setLoading] = useState(false);
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

    setLoading(true); //set loading to true before making the request
    console.log("Loading state set to true");
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
      setLoading(false); //set loading tho false after successful submission
      console.log("Loading state set to false");
    } catch (error) {
      setError("Message must be between 5 and 140 charaters!");

      setLoading(false); //set loading to false after successful submission
    }
  };

  return (
    <section className="post-container">
      {<Loading loading={loading} />}
      {/* render loading message */}
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
        <div className="character-count">{charactersLeft} characters left</div>
        {error && <div className="error">{error}</div>}
        {/* {error message "Something didn't go to plan. Try again later!" is displayed here} */}

        <button className="send-button" type="submit">
          <span id="hearts">❤️</span>
          <p>Send Happy Thought </p>
          <span id="hearts">❤️</span>
        </button>
      </form>
    </section>
  );
};
