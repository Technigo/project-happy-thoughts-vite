// Importing `useState` and `useEffect` hooks from "react" library
import { useState, useEffect } from "react";
import "./postmessage.css"

// Declaring a functional component `PostMessage` that takes `newMessage` and `fetchPosts` as props
export const PostMessage = ({ newMessage, fetchPosts }) => {

    // Declaring state `newPost` and its updater function `setNewPost`, initializing it with an empty string
    const [newPost, setNewPost] = useState("");

    // Declaring state `errorMessage` and its updater function `setErrorMessage`, initializing it with an empty string
    const [errorMessage, setErrorMessage] = useState("");

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

        // Preventing the default form submission behavior
        event.preventDefault();

        // Logging the current `newPost` value for debugging
        console.log("newPost onformsubmit:", newPost);

        // Checking if `newPost` is shorter than 5 characters
        if (newPost.length <= 4) {
            // Setting an error message if `newPost` is too short
            setErrorMessage(
                "Your message is too short, it needs at least 5 letters 😔"
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
                "https://happy-thoughts-api-evelyn.onrender.com/thoughts",
                options
            )
                .then((response) => response.json()) // Parsing the response as JSON
                .then((data) => {
                    // Calling `newMessage` function (passed as prop) with the parsed data
                    newMessage(data);
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
        <>
            <div className="post-message-container">

                <div className="under-title">
                    <h3 className="align-top">Send a happy thought!</h3></div>

                <form onSubmit={handleFormSubmit}>
                    <textarea
                        rows="10"
                        cols="40"
                        placeholder="'Flip It And Reverse It.' - Missy Elliot"
                        value={newPost}
                        onChange={(event) => setNewPost(event.target.value)}
                    />

                    <div className="post-msg-length" style={{ color: 'rgb(182, 182, 182)' }}>
                        {/* Displaying `errorMessage` */}
                        <p className="error">{errorMessage}</p>

                        <p className={`length ${newPost.length >= 140 ? "red" : ""}`}>
                            {newPost.length}/140
                        </p>
                    </div>


                    <button
                        type="submit"
                        id="submitPostBtn"
                        aria-label="button submitting your post message"
                        disabled={newPost.length < 4 || newPost.length > 140}
                    >
                        <span className="heart-icon" aria-label="heart icon">❤️</span>
                        Post A Happy Thought
                        <span className="heart-icon" aria-label="heart icon">❤️</span>
                    </button>
                </form>
            </div>
        </ >
    );
};
