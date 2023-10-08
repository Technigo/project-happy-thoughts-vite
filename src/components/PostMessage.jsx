
// Importing `useState` and `useEffect` hooks from "react" library
import { useState, useEffect } from "react";
import "../css_Components/postMessage.css"
// Declaring a functional component `PostMessage` that takes `newMessage` and `fetchPosts` as props
export const PostMessage = ({ newMessage, fetchPosts }) => {

  const [newPost, setNewPost] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  // Using `useEffect` hook to perform side effects, specifically to check the length of `newPost` and set an error message if needed
  useEffect(() => {
    if (newPost.length >= 141) {
      setErrorMessage("Your message is too long 😔");
    } else {
      // Clearing the error message if `newPost` is not too long
      setErrorMessage("");
    }
    setIsButtonDisabled(newPost.length >= 140);
  }, [newPost]); // Dependency array includes `newPost`, so the effect runs when `newPost` changes

  // Declaring a function `handleFormSubmit` to handle form submission
  const handleFormSubmit = async (event) => {
    // Preventing the default form submission behavior
    event.preventDefault();
    console.log("newPost onformsubmit:", newPost);
    if (newPost.length <= 4) {
      setErrorMessage(
        "Your message is too short, it needs at least 5 letters 😔"
      );
    } else {
      // Declaring `options` object to configure the fetch request
      const requestOptions = {
        method: "POST", 
        body: JSON.stringify({ message: newPost }),
        headers: { "Content-Type": "application/json" },
      };

      // Making a POST request to the API endpoint with the configured options
      await fetch(
        "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts",
        requestOptions
      )
        .then((response) => response.json()) 
        .then((data) => {
          newMessage(data);
          setNewPost("");
          fetchPosts();
        })
        .catch((error) => console.log(error));
    }
  };


  return (
    <div className="post-message-wrapper">
      <h2>What is making you happy right now?</h2>
      <form onSubmit={handleFormSubmit}>
        <textarea
          rows="5"
          cols="50"
          name="textarea"
          aria-label="text area for submitting a message"
          placeholder="'If music be the food of love, play on.' – William Shakespeare"
          value={newPost}
          onChange={(event) => setNewPost(event.target.value)}
        />
        <div className="post-length-wrapper">
          <p className="error">{errorMessage}</p>
          <p className={`length ${newPost.length >= 140 ? "red" : ""}`}>
            {newPost.length}/140
          </p>
        </div>
        <button type="submit" id="submitPostBtn" aria-label="button for submiting your post" disabled={isButtonDisabled}>
          <span className="emoji" aria-label="heart emoji">❤️</span>
          Send Happy Thought
          <span className="emoji" aria-label="heart emoji">❤️</span>
        </button>
        {isButtonDisabled}
      </form>
    </div>
  );
};

