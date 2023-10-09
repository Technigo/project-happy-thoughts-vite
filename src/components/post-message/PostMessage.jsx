// Importing `useState` and `useEffect` hooks from "react" library
import { useState, useEffect } from "react";
import './PostMessage.module.css';
import { MessageList } from "../message-list/MessageList";
// Declaring a functional component `PostMessage` that takes `newMessage` and `fetchPosts` as props
export const PostMessage = ({ newMessage, fetchPosts }) => {
    // Declaring state `newPost` and its updater function `setNewPost`, initializing it with an empty string
    const [newPost, setNewPost] = useState("");
    // Declaring state `errorMessage` and its updater function `setErrorMessage`, initializing it with an empty string
    // const [errorMessage, setErrorMessage] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    // const maxLength = 140;

    useEffect(() => {
        // Checking if the length of `newPost` is 141 or more characters
        if (newPost.length >= 141) {
            // Setting an error message if `newPost` is too long
            setErrorMessage("Your message is too long 😔");
        } else {
            // Clearing the error message if `newPost` is not too long
            setErrorMessage("");
        }
    }, [newPost]);

    //POST HANDLER A NEW MESSAGE
    // const handleFormSubmit = async (e) => {
    //     e.preventDefault();
    //     setErrorMessage(true);

    //     const response = await fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({ newPost })
    //     });


    //     const data = await response.json();

    //     if (response.ok) {
    //         newMessage(data);
    //     } else {
    //         console.log('error posting', data);
    //         throw new Error('failed post');
    //     }
    //     fetchPosts('');
    // }

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
                "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts",
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
    // //This makes the lenght of the post 
    // const validMessage = () => {
    //     if (!errorMessage) return "";
    //     if (newPost.length < 4) return "Your message is too short, it needs at least 5 letters 😔";
    //     if (newPost.length > maxLength) return "Your message is too long 😔";
    //     return "";
    // };

    //This makes a new post
    return (
        < div className="post-message-container">

            <h2>Post your message</h2>
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
                <div>
                    {/* Displaying `errorMessage` */}
                    <p className="error">{errorMessage}</p>
                    {/* Displaying the character count of `newPost`, applying a "red" class if length is 140 or more */}
                    <p className={`length ${newPost.length >= 140 ? "red" : ""}`}>
                        {newPost.length}/140
                    </p>
                </div>
                {/* Submit button for the form */}

                <button type="submit" id="submitPostBtn">
                    Send Message
                </button>
            </form>

            <MessageList newMessage={newMessage} />

        </div>
    )

};

//   ------------ BREAK ------------






{/* <form onSubmit={handleFormSubmit}>
                <h2>What is making you happy right now?</h2>
                <textarea
                    id="newPost"
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                    placeholder="'If music be the food of love, play on'-William Shakespear"
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>{validMessage()}</span>
                    <span>{`${newPost.length}/${maxLength}`}</span>
                </div>
                <button type="submit">Send A Happy Thought</button>
            </form> */}

// // Using `useEffect` hook to perform side effects, specifically to check the length of `newPost` and set an error message if needed
// useEffect(() => {
//     // Checking if the length of `newPost` is 141 or more characters
//     if (newPost.length >= 141) {
//         // Setting an error message if `newPost` is too long
//         setErrorMessage("Your message is too long 😔");
//     } else {
//         // Clearing the error message if `newPost` is not too long
//         setErrorMessage("");
//     }
// }, [newPost]); // Dependency array includes `newPost`, so the effect runs when `newPost` changes

// // Declaring a function `handleFormSubmit` to handle form submission
// const handleFormSubmit = async (event) => {
//     // Preventing the default form submission behavior
//     event.preventDefault();
//     // Logging the current `newPost` value for debugging
//     console.log("newPost onformsubmit:", newPost);

//     // Checking if `newPost` is shorter than 5 characters
//     if (newPost.length <= 4) {
//         // Setting an error message if `newPost` is too short
//         setErrorMessage(
//             "Your message is too short, it needs at least 5 letters 😔"
//         );
//     } else {
//         // Declaring `options` object to configure the fetch request
//         const options = {
//             method: "POST", // Specifying the request method as POST
//             // Stringifying `newPost` and setting it as the request body
//             body: JSON.stringify({
//                 message: `${newPost}`,
//             }),
//             // Setting the content type of the request to application/json
//             headers: { "Content-Type": "application/json" },
//         };

//         // Making a POST request to the API endpoint with the configured options
//         await fetch(
//             "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts",
//             options
//         )
//             .then((response) => response.json()) // Parsing the response as JSON
//             .then((data) => {
//                 // Calling `newMessage` function (passed as prop) with the parsed data
//                 newMessage(data);
//                 // Resetting `newPost` to an empty string, clearing the textarea
//                 setNewPost("");
//                 // Calling `fetchPosts` function (passed as prop) to re-fetch posts
//                 fetchPosts();
//             })
//             // Logging any errors that occur during the fetch operation
//             .catch((error) => console.log(error));
//     }
// };

// // Returning JSX to render the component UI
// return (
//     <div>
//         <h2>Post your message</h2>
//         {/* Form element with onSubmit event handler set to `handleFormSubmit` */}
//         <form onSubmit={handleFormSubmit}>
//             {/* Textarea for user to type their message, value and onChange handler are bound to `newPost` and `setNewPost` respectively */}
//             <textarea
//                 rows="5"
//                 cols="50"
//                 placeholder="'If music be the food of love, play on.' – William Shakespeare"
//                 value={newPost}
//                 onChange={(e) => setNewPost(e.target.value)}
//             />
//             <div>
//                 {/* Displaying `errorMessage` */}
//                 <p className="error">{errorMessage}</p>
//                 {/* Displaying the character count of `newPost`, applying a "red" class if length is 140 or more */}
//                 <p className={`length ${newPost.length >= 140 ? "red" : ""}`}>
//                     {newPost.length}/140
//                 </p>
//             </div>
//             {/* Submit button for the form */}
//             <button type="submit" id="submitPostBtn">
//                 Send Message
//             </button>
//         </form>
//     </div>
// );
// };

// Explanation:
// The PostMessage component allows users to post a new message to an API. It maintains the state for the new message input (newPost) and any error messages (errorMessage). The useEffect hook checks the length of newPost and sets an error message if it's too long. Upon form submission, handleFormSubmit checks the message length, sets an error message if it's too short, and otherwise sends a POST request to the API. If the API call is successful, it clears the input and triggers a re-fetch of posts from the parent component using the fetchPosts prop. The component renders a form that includes the message input, character count, and any error messages.