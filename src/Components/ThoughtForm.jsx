import { useState } from "react";
import "../Styles/ThoughtForm.css";

// eslint-disable-next-line react/prop-types
export const ThoughtForm = ({ onNewThought }) => {
  const [newThought, setNewThought] = useState(''); // 'newThought' holds the user’s input for the thought message. 'setNewThought' is used to update it.
  const [errorMessage, setErrorMessage] = useState(''); // 'errorMessage' holds any error messages, if the input doesn’t meet character limits. 'setErrorMessage' updates it.

  const handleSubmit = async (event) => {  // This function handles the form submission when the user clicks the submit button.
    event.preventDefault(); // Prevents the page from refreshing on form submission.

    // Check for minimum character count
    if (newThought.length < 5) {
      setErrorMessage("Your thought must be at least 5 characters long.");
      return; // Exit the function early if input is too short.
    }

    // Check for maximum character count
    else if (newThought.length > 140) {
      setErrorMessage("Your thought cannot be more than 140 characters long.");
      return; // Exit the function early if input is too long.
    }

    const URL = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";   // Define the URL where the POST request will be sent to add a new thought.

    try {
      const response = await fetch(URL, {  // Use fetch to make a POST request to the server to submit the new thought.
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: newThought }),  // Convert the 'newThought' to JSON and send it in the request body.
      });

      if (response.ok) {  // If the response from the server is OK (status code 200-299):
        const newThoughtData = await response.json(); // Get the newly added thought data from the response.


        onNewThought(newThoughtData); // Call the onNewThought function from the parent component (App.jsx) with new thought data.
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
      <h2>What is making you happy right now?</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="thoughtText" className="visually-hidden">Share your happy thought:</label>
        <textarea
          value={newThought}
          onChange={(event) => setNewThought(event.target.value)} // Fix setNewThought
          rows="4" // set size of textarea
          cols="55" // set width of textarea
          aria-required="true"
          aria-describedby="thoughtTextHelp"
          placeholder="Share your happy thought here..."
        />
        <small id="thoughtTextHelp" className="visually-hidden">
          Enter a message about what’s making you happy.
        </small>
        <button type="submit" aria-label="Send happy thought">
          ❤️ Send happy thought ❤️</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Show error */}
    </div>
  );
};
