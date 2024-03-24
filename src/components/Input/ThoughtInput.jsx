import { useState } from "react";
import "./ThoughtInput.css";

export const ThoughtInput = ({ onAddThought }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  /*This function submits a new thought. It sends the input value as JSON in a POST request to the API endpoint.*/
  /*When the thought is added to the list it clears the input.*/
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (inputValue.trim() !== "") {
      try {
        const response = await fetch(
          "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ message: inputValue }),
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

  /* This code is rendering an input field which includes a submit button and a character counter.*/
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
        <div className={inputValue.length > 140 ? "counter red" : "counter"}>
          {140 - inputValue.length} characters left
        </div>
      </div>
    </form>
  );
};
