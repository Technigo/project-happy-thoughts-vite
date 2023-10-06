import { useEffect, useState } from "react";
import "./Form.css";

export const Form = ({ newThought, fetchData, apiUrl }) => {
  const [newPost, setNewPost] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Using `useEffect` hook to perform side effects, specifically to check the length of `newPost` and set an error message if needed
  useEffect(() => {
    // Checking if the length of `newPost` is 141 or more characters
    if (newPost.length >= 141) {
      // Error message if it's too long
      setErrorMessage("Your message is too long 😔");
    } else {
      // Clearing the error message if it's not too long
      setErrorMessage("");
    }
  }, [newPost]); // Dependency array includes `newPost`, so the effect runs when `newPost` changes

  // Function for handling form submission
  const handleFormSubmit = async (event) => {
    event.preventDefault(); // Preventing the default form submission behavior

    // Checking if the length of `newPost` is shorter than 5 characters
    if (newPost.length <= 4) {
      // Error message if it's too short
      setErrorMessage(
        "Your message is too short, it needs at least 5 letters 😔"
      );
    } else if (newPost.length >= 141) {
      // Error message if it's too long
      setErrorMessage("Your message is too long 😔");
    } else {
      // Declaring `options` object to configure the fetch request
      const options = {
        method: "POST", // Specifying the request method as POST
        // Stringifying `newPost` and setting it as the request body
        body: JSON.stringify({
          message: `${newPost}`,
        }),
        // Setting the content type of the request to application/json
        headers: { "Content-Type": "application/json" },
      };

      // Making a POST request to the API endpoint with the configured options
      await fetch(apiUrl, options)
        .then((response) => response.json()) // Parsing the response as JSON
        .then((data) => {
          // Calling `newThought` function (passed as prop) with the parsed data
          newThought(data);
          // Resetting `newPost` to an empty string, clearing the textarea
          setNewPost("");
          // Calling `fetchData` function (passed as prop) to re-fetch posts
          fetchData();
          // Logging the current `newPost` value for debugging
          console.log("newPost onformsubmit:", newPost);
        })
        // Logging any errors that occur during the fetch
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="form-container">
      <h1>What's making you happy right now?</h1>
      <form onSubmit={handleFormSubmit}>
        <textarea
          rows="3"
          placeholder="Something that makes you happy right now..."
          value={newPost}
          onChange={(event) => setNewPost(event.target.value)}
        />
        <div className="post-lenght">
          <p className="error-message">{errorMessage}</p>
          <p className={`length ${newPost.length >= 140 ? "red" : ""}`}>
            {newPost.length}/140
          </p>
        </div>
        <button
          type="submit"
          className="submit-btn"
          aria-label="Button for submiting your thought"
        >
          <span>❤️</span>
          Send Happy Thought
          <span>❤️</span>
        </button>
      </form>
    </div>
  );
};
