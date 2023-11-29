import { useState, useEffect } from "react";
import "./CreateThought.css"; //import styling

export const CreateThought = () => {
  const [newPost, setNewPost] = useState(""); // Initialize state for the new post input
  const [errorMessage, setErrorMessage] = useState(""); // Initialize state for error messages

  useEffect(() => {
    // Check the length of `newPost` to provide feedback to the user with the rule of max.140 characters
    if (newPost.length >= 141) {
      setErrorMessage("Your message is too long 😔"); // Display an error message for long messages
    } else {
      // Clearing the error message if `newPost` is not too long
      setErrorMessage("");
    }
  }, [newPost]); // The effect runs when `newPost` changes

  const handleFormSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    if (newPost.length <= 4) {
      setErrorMessage(
        "Your message is too short, it needs at least 5 letters 😔"
      ); // Display an error message for short messages
    } else {
      const options = {
        method: "POST",
        body: JSON.stringify({
          message: `${newPost}`,
        }),
        headers: { "Content-Type": "application/json" },
      };

      try {
        // Send a POST request to the API endpoint with the configured options
        const response = await fetch(
          "https://jennylarsen-project-happy-thoughts-api.onrender.com/thoughts",
          options
        );

        if (response.ok) {
          // Clear the input field by setting `newPost` to an empty string
          setNewPost("");
        } else {
          console.error("Failed to send the happy thought.");
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  // Render the component UI
  return (
    <div className="text-area-wrapper">
      <h2>What is making you happy right now?</h2>

      <form onSubmit={handleFormSubmit}>
        <textarea
          className="text-area"
          rows="3" //specifies the number of visible text lines in the textarea.
          cols="50" //pecifies the number of visible columns (characters) in the textarea. It's set to 50, meaning that the textarea will initially display 50 characters in each line.
          placeholder="'If music be the food of love, play on.' – William Shakespeare"
          value={newPost}
          onChange={(event) => setNewPost(event.target.value)} //when the content of the <textarea> element changes (due to user input), update the newPost state variable with the new value entered by the user.
        />
        <div>
          <p className="error">{errorMessage}</p>

          {/* Displaying the character count of `newPost`, applying a "red" class if length is 140 or more, when the length of newPost is greater than or equal to 140 characters, this <p> element will have the class name "length red." If the length is less than 140 characters, it will have only the class name "length. */}
          <p className={`length ${newPost.length >= 140 ? "red" : ""}`}>
            {newPost.length}/140
          </p>
        </div>

        <button type="submit" id="submitPostBtn" className="submit-btn">
          ❤️ Send Happy Thought ❤️
        </button>
      </form>
    </div>
  );
};
