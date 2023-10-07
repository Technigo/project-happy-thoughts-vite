/* eslint-disable react/prop-types */
import { useState } from "react";
import "./NewPost.css";

export const NewPost = ({ onNewThought }) => {
  const [message, setMessage] = useState(""); // State to store the message input
  const [error, setError] = useState(null); // State to handle validation errors

  // Function to handle changes in the textarea
  const handleTextareaChange = (event) => {
    const newMessage = event.target.value;
    setMessage(newMessage);

    // Check if the message length is within the allowed range (5 to 140 characters)
    if (newMessage.length < 5 || newMessage.length > 140) {
      setError("Your message should be between 5 and 140 characters.");
    } else {
      setError(null); // Clear the error message if the length is valid
    }
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if the message length is valid before sending the request
    if (message.length >= 5 && message.length <= 140) {
      // Send a POST request to add a new thought
      fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: message })
      })
        .then((response) => response.json())
        .then((data) => {
          if (data._id) {
            onNewThought(data); // Add the new thought to the list
            setMessage(""); // Clear the message input after adding the thought
          } else {
            alert("Something went wrong");
          }
        })
        .catch((error) => {
          console.error("Error", error);
        });
    }
  };

  return (
    <div className="newPost-wrapper">
      <h2>What is making you happy right now?</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="If music be the food of love, play on' - William Shakespeare"
          value={message}
          onChange={handleTextareaChange}
        />
        <div className="post-length">
          <p className="error">{error}</p>
          <p className="length">{message.length}/140</p> 
        </div>
        <button type="submit" className="submitBtn" aria-label="submit button">
          &#x2764;&#xFE0F; Send Happy Thought &#x2764;&#xFE0F;
        </button>
      </form>
    </div>
  );
};
