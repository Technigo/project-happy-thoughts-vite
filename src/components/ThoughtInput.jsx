import { useState } from "react";
import "./ThoughtInput.css";

export const ThoughtInput = ({ onAddThought }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

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
