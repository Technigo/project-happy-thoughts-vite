import { useState } from "react";
import "../Styles/ThoughtForm.css";

// eslint-disable-next-line react/prop-types
export const ThoughtForm = ({ onNewThought }) => {
  const [newThought, setNewThought] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // Error handling

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check for minimum character count
    if (newThought.length < 5) {
      setErrorMessage("Your thought must be at least 5 characters long.");
      return; // Exit the function early if validation fails
    }

    // Check for minimum character count
    else if (newThought.length > 140) {
      setErrorMessage("Your thought cannot be more than 140 characters long.");
      return; // Exit the function early if validation fails
    }

    const URL = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: newThought }),
      });

      if (response.ok) {
        const newThoughtData = await response.json();
        onNewThought(newThoughtData); // Update thoughts in app.jsx (parent component) 
        setNewThought(""); // Clear input field after successful submission
      } else if (response.status === 400) {
        const errorData = await response.json();
        setErrorMessage(errorData.message); // Display error message for invalid data
      } else {
        console.error(
          "Failed to post thought. The message must be between 5 and 140 characters."
        );
      }
    } catch (error) {
      console.error("Error posting thought: ", error);
      setErrorMessage("Failed to post thought. Please try again."); // Generic error message
    }
  };

  return (
    <div className="thought-form">
      <h3>What’s making you happy right now?</h3>
      <form onSubmit={handleSubmit}>
        <textarea
          value={newThought}
          onChange={(event) => setNewThought(event.target.value)} // Fix setNewThought
          rows="4" // Optional: set size of textarea
          cols="50" // Optional: set width of textarea
        />
        <button type="submit">❤️ Send happy thought ❤️</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Show error */}
    </div>
  );
};
