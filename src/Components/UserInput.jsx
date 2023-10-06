import { useState } from "react";

// This component is responsible to send the message to the server

export const UserInput = ({ newThoughtPosted }) => {
  const [newThought, setnewThought] = useState("");

  const handlePostMessage = async () => {
    // Perform the POST request to send the new message to the server
    try {
      const res = await fetch(
        "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: newThought }),
        }
      );

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      // After successfully posting the new message, invoke the callback
      // function to refresh the list of messages
      newThoughtPosted();

      // Clear the input field
      setnewThought("");
    } catch (error) {
      console.error("Failed to post new message", error);
    }
  };

  return (
    <div className="inputContainer">
      <h1 className="question">What is making you happy right now?</h1>
      <label>
        <textarea
          className="input"
          rows="5"
          cols="33"
          value={newThought}
          onChange={(e) => setnewThought(e.target.value)}
          placeholder="'Happiness is a state of mind. It’s just according to the way you look at things.' – Walt Disney"
        />
      </label>
      <button onClick={handlePostMessage} className="sendBtn">
        ❤️ Send Happy Thought ❤️
      </button>
    </div>
  );
};

export default UserInput;
