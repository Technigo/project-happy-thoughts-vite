import { useState, useEffect } from "react";
import "../CreateThought/CreateThought.css";

export const CreateThought = () => {
  const [newPost, setNewPost] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // Checking if the length of `newPost` is 141 or more characters
    if (newPost.length >= 141) {
      setErrorMessage("Your message is too long 😔");
    } else {
      // Clearing the error message if `newPost` is not too long
      setErrorMessage("");
    }
  }, [newPost]); // Dependency array includes `newPost`, so the effect runs when `newPost` changes

  const handleFormSubmit = async (event) => {
    event.preventDefault(); // Preventing the default form submission behavior

    if (newPost.length <= 4) {
      setErrorMessage(
        "Your message is too short, it needs at least 5 letters 😔"
      ); // Setting an error message if `newPost` is too short
    } else {
      const options = {
        method: "POST",
        body: JSON.stringify({
          message: `${newPost}`,
        }),
        headers: { "Content-Type": "application/json" },
      };

      try {
        // Making a POST request to the API endpoint with the configured options
        const response = await fetch(
          "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts",
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
          onChange={(event) => setNewPost(event.target.value)}
        />
        <div>
          <p className="error">{errorMessage}</p>

          {/* Displaying the character count of `newPost`, applying a "red" class if length is 140 or more */}
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
