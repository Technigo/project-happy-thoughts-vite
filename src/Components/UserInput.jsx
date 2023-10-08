/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

// This component is responsible to send the message to the server

export const UserInput = ({ newThoughtPosted }) => {
  const [newThought, setNewThought] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (newThought.length >= 141) {
      setErrorMessage("Your Message is too long");
    } else {
      setErrorMessage("");
    }
  }, [newThought]);

  const handlePostMessage = async (event) => {
    // Perform the POST request to send the new message to the server
    event.preventDefault();
    if (newThought.length <= 4) {
      setErrorMessage("Your message is too short, it needs at least 5 letters");
    } else {
      const request = {
        method: "POST",
        body: JSON.stringify({
          message: `${newThought}`,
        }),
        headers: { "Content-Type": "application/json" },
      };

      await fetch(
        "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts",
        request
      )
        .then((response) => response.json()) // Parsing the response as JSON
        .then((data) => {
          newThoughtPosted(data);

          setNewThought("");
        })
        // Logging any errors that occur during the fetch operation
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="inputContainer">
      <h1 className="question">What is making you happy right now?</h1>
      <label>
        <textarea
          className="input"
          rows="5"
          cols="50"
          value={newThought}
          onChange={(e) => setNewThought(e.target.value)}
          placeholder="'Happiness is a state of mind. It’s just according to the way you look at things.' – Walt Disney"
        />
      </label>
      <div className="error">
        <p>{errorMessage}</p>
        <p className="text-count">{newThought.length}/140</p>
        {/* {`length ${newThought.length >= 140 ? "red" : ""}`} */}
      </div>
      <div>
        <button onClick={handlePostMessage} className="sendBtn">
          ❤️ Send Happy Thought ❤️
        </button>
      </div>
    </div>
  );
};

export default UserInput;
