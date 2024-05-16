import { useState } from "react";
import "./CreateThought.css";

const APIURL = "https://project-happy-thoughts-api-044t.onrender.com";

export const CreateThought = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(APIURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) {
        const errorMessage = await response.json();
        throw new Error(errorMessage.error);
      }

      const newThought = await response.json();
      console.log("New thought:", newThought);
      setMessage("");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleChange = (event) => {
    setMessage(event.target.value);
    setError("");
  };

  return (
    <div className="create-post-container">
      <h2>What's making you happy right now?</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <textarea
          value={message}
          onChange={handleChange}
          placeholder="Enter your happy thought"
          required
          minLength={5}
          maxLength={140}
          className="text-area"
        />
        <br />
        <button type="submit" className="create-post-btn">
          {" "}
          ❤️ Send Happy Thought ❤️
        </button>
      </form>
    </div>
  );
};
