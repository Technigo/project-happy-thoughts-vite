import { useState, useEffect } from "react";

// Declaring the functional component `PostThought` that takes `fetchPosts` as prop
export const PostThought = ({ fetchPosts }) => {
  // Declaring state `newPost` and its updater function `setNewPost`, initializing it with an empty string
  const [newPost, setNewPost] = useState("");
  // Declaring state `errorMessage` and its updater function `setErrorMessage`, initializing it with an empty string
  const [errorMessage, setErrorMessage] = useState("");

  // Using `useEffect` hook to perform side effects, this in checks the length of `newPost` and set an error message if needed
  useEffect(() => {
    // Checking if the length of `newPost` is 141 or above
    if (newPost.length >= 141) {
      // Setting an error message if `newPost` is too long
      setErrorMessage("Your message is too long 😓");
    } else {
      // Clearing the error message if `newPost` is not too long
      setErrorMessage("");
    }
  }, [newPost]); // Dependency array includes `newPost`, so the effect runs when `newPost` changes

  // Declaring a function `handleFormSubmit` to handle form submission
  const handleFormSubmit = async (event) => {
    // Preventing the default form submission behavior which is reloading the page
    event.preventDefault();

    // Checking if `newPost` is shorter than 5 characters
    if (newPost.length <= 4) {
      // Setting an error message if `newPost` is too short
      setErrorMessage(
        "Your message is too short, it needs at least 5 characters 😓"
      );
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
      await fetch(
        "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts",
        options
      )
        .then((response) => response.json()) // Parsing the response as JSON
        .then((data) => {
          // Resetting `newPost` to an empty string, clearing the textarea
          setNewPost("");
          // Calling `fetchPosts` function (passed as prop) to re-fetch posts
          fetchPosts();
        })
        // Logging any errors that occur during the fetch operation
        .catch((error) => console.log(error));
    }
  };

  // Returning JSX to render the component UI
  return (
    <div className="post-wrapper">
      <h2>What is making you happy right now?</h2>
      {/* Form element with onSubmit event handler set to `handleFormSubmit` */}
      <form onSubmit={handleFormSubmit}>
        {/* Textarea for user to type their message, value and onChange handler are bound to `newPost` and `setNewPost` respectively */}
        <textarea
          rows="3"
          cols="50"
          placeholder="'Every day brings new opportunities and reasons to smile. Embrace the beauty of today!'"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        />
        <div className="post-counter">
          {/* Displaying `errorMessage` */}
          <p className="error">{errorMessage}</p>
          {/* Displaying the character count of `newPost`, applying a "red" class if length is 140 or more */}
          <p className={`length ${newPost.length >= 141 ? "red" : ""}`}>
            {newPost.length}/140
          </p>
        </div>
        {/* Submit button for the form. The aria-label attribute is used to provide a text alternative to make it more accessable */}
        <button
          type="submit"
          id="submitPostBtn"
          aria-label="button for submitting your post"
        >
          <span className="emoji" aria-label="heart emoji">
            ❤️
          </span>
          Send Happy Thought
          <span className="emoji" aria-label="heart emoji">
            ❤️
          </span>
        </button>
      </form>
    </div>
  );
};
