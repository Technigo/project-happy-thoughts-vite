import { useState } from "react";
import "./ThoughtInput.css";

export const ThoughtInput = ({ onAddThought }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    const newValue = event.target.value;
    if (newValue.length <= 140) {
      setInputValue(newValue);
    }
  };

  /* This function submits a new thought. It sends the input value as JSON in a POST request to the API endpoint.*/
  /* When the thought is added to the list it clears the input.*/
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (inputValue.trim() !== "") {
      try {
        const response = await fetch(
          "https://project-happy-thoughts-api-qgyf.onrender.com/thoughts",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ text: inputValue }),
          }
        );

        if (!response.ok) {
          throw new Error("Error adding thought");
        }

        const data = await response.json();
        onAddThought(data);
        setInputValue("");
      } catch (error) {
        console.error("Error adding thought:", error);
      }
    }
  };

  /* This code is rendering an input field which includes a submit button and a character counter */
  /* The counter will turn red when it's 30 characters left */
  return (
    <form onSubmit={handleSubmit} className="thought-input-container">
      <p>What&apos;s making you happy right now?</p>
      <input
        type="text"
        placeholder="Add your thought..."
        value={inputValue}
        onChange={handleChange}
        className="input-field"
      />
      <div className="input-container">
        <button type="submit" className="submit-button">
          ❤️ Send Happy Thought ❤️
        </button>
        <div
          className={`counter ${140 - inputValue.length <= 30 ? "red" : ""}`}
        >
          {140 - inputValue.length} characters left
        </div>
      </div>
    </form>
  );
};
