// Importing `useState` and `useEffect` hooks from "react" library
import { useState, useEffect } from "react";

// Declaring a functional component `PostMessage` that takes `newMessage` and `fetchPosts` as props
export const PostMessage = ({ newMessage, fetchPosts }) => {
  // Declaring state `newPost` and its updater function `setNewPost`, initializing it with an empty string
  const [newPost, setNewPost] = useState("");
  // Declaring state `errorMessage` and its updater function `setErrorMessage`, initializing it with an empty string
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Using `useEffect` hook to perform side effects, specifically to check the length of `newPost` and set an error message if needed
  useEffect(() => {
    // Checking if the length of `newPost` is 141 or more characters
    if (newPost.length >= 141) {
      // Setting an error message if `newPost` is too long
      setErrorMessage("Your message is too long 😔");
    } else {
      // Clearing the error message if `newPost` is not too long
      setErrorMessage("");
    }
  }, [newPost]); // Dependency array includes `newPost`, so the effect runs when `newPost` changes

  // Declaring a function `handleFormSubmit` to handle form submission
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (newPost.length <= 4) {
      setErrorMessage(
        "Your message is too short, it needs at least 5 letters 😔"
      );
    } else {
      setErrorMessage(""); // Clear any previous error message
      // Set a loading state to show a loading indicator
      setLoading(true);

      const options = {
        method: "POST",
        body: JSON.stringify({
          message: `${newPost}`,
        }),
        headers: { "Content-Type": "application/json" },
      };

      try {
        const response = await fetch(
          "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts",
          options
        );
        const data = await response.json();
        newMessage(data);
        setNewPost("");
        fetchPosts();
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false); // Turn off loading indicator
      }
    }
  };


  // Returning JSX to render the component UI
  return (
    <div className="post-wrapper">
      <h2>What&apos;s making you happy right now?</h2>
      {/* Form element with onSubmit event handler set to `handleFormSubmit` */}
      <form onSubmit={handleFormSubmit}>
        {/* Textarea for user to type their message, value and onChange handler are bound to `newPost` and `setNewPost` respectively */}
        <textarea
          rows="5"
          cols="50"
          placeholder="'If music be the food of love, play on.' – William Shakespeare"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        />
        <div className="post-length">
          {/* Displaying `errorMessage` */}
          <p className="error">{errorMessage}</p>
          {/* Displaying the character count of `newPost`, applying a "red" class if length is 140 or more */}
          <p className={`length ${newPost.length >= 140 ? "red" : ""}`}>
            {newPost.length}/140
          </p>
        </div>
        {/* Submit button for the form */}
        <button type="submit" id="submitPostBtn">
          <span className="emoji" aria-label="heart emoji">❤️</span>
          Send Happy Thought
          <span className="emoji" aria-label="heart emoji">❤️</span>
        </button>
      </form>
    </div>
  );
};

// Explanation:
// The PostMessage component allows users to post a new message to an API. 
// It maintains the state for the new message input (newPost) and any error messages (errorMessage). 
// The useEffect hook checks the length of newPost and sets an error message if it's too long. 
// Upon form submission, handleFormSubmit checks the message length, sets an error message if it's too short, and otherwise sends a POST request to the API. If the API call is successful, it clears the input and triggers a re-fetch of posts from the parent component using the fetchPosts prop. 
// The component renders a form that includes the message input, character count, and any error messages.