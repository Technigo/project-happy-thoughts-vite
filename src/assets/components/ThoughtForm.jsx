import { useState } from "react";

export const ThoughtForm = ({ onThoughtSubmit }) => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [charCount, setCharCount] = useState(0);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (message.length >= 5 && message.length <= 140) {
      fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      })
        .then((response) => response.json())
        .then((newThought) => {
          onThoughtSubmit(newThought);
          setMessage("");
          setError("");
          setIsButtonDisabled(false);
          setCharCount(0);
        })
        .catch((error) => console.error("Error posting thought:", error));
    } else {
      setError("Message must be 5-140 characters long.");
      setIsButtonDisabled(true);
    }
  };

  const handleInputChange = (e) => {
    const inputMessage = e.target.value;
    setMessage(inputMessage);
    const currentCharCount = inputMessage.length;

    if (currentCharCount > 140) {
      setError("Message must be 5-140 characters long.");
      setIsButtonDisabled(true);
    } else {
      setError("");
      setIsButtonDisabled(false);
    }

    setCharCount(currentCharCount);
  };

  return (
    <div className="textarea-container">
      <h2>Post a Happy Thought</h2>
      <form onSubmit={handleFormSubmit}>
        <textarea
          value={message}
          onChange={handleInputChange}
          placeholder="What's your happy thought?"
        />
        {error && <p className="error">{error}</p>}
        <p className={charCount > 140 ? "char-count error" : "char-count"}>
          {charCount}/{charCount > 140 ? "140" : "140"}
        </p>
        <button
          type="submit"
          disabled={isButtonDisabled}
          className={isButtonDisabled ? "disabled-button" : ""}
        >
          ❤️ Send Happy Thought ❤️
        </button>
      </form>
    </div>
  );
  
};
