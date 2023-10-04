import { useState } from "react";

// eslint-disable-next-line react/prop-types
export const NewThoughtForm = ({ onNewThought }) => {
  const [message, setMessage] = useState(""); // State to hold the thought message

  const handleSubmit = (event) => {
    event.preventDefault();

    // Defines the endpoint and POST data
    const url = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";
    const data = {
      message: message,
    };

    // Validation
    if (message.length < 5 || message.length > 140) {
      alert("Your message should be between 5 and 140 characters long.");
      return;
    }

    fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data._id) {
          // If the thought was created successfully
          onNewThought(data);
        } else {
          // Handle the error message from the API
          alert(data.message);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="happy-form">
      <h3>What is making you happy right now?</h3>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="'If music be the food of love, play on.' – William Shakespeare"
        className="happy-textarea"
      ></textarea>
      <button
        type="submit"
        className="send-happy-thought"
        id="send-happy-thought"
      >
        ❤️ Send Happy Thought ❤️
      </button>
    </form>
  );
};
