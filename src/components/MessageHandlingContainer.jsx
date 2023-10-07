
// Importing `useState` and `useEffect` hooks from "react" library
import { useState, useEffect } from "react";
// Importing `PostMessage` and `MessageList` components from respective files
import { PostMessage } from "./PostMessage";
import { MessageList } from "./MessageList";
import "../index.css"


// // Explanation:
// // The Distributive component serves as a container that manages the state and functions related to message fetching and posting in a message board application. Initially, it sets a loading state to manage the loading status and a messageList state to store the fetched messages. The fetchPosts function retrieves messages from an API and updates the messageList, while handling the loading status. Upon component mount, useEffect triggers fetchPosts to populate the initial messages. The addNewPost function allows adding a new message to the messageList state. The component renders PostMessage and MessageList components, passing down relevant states and functions as props to manage and display messages interactively.


// // Declaring a functional component named `Distributive`
export const MessageHandlingContainer = () => {
    //     /* Declaring state `loading` and its updater function `setLoading`, initializing it with `false`
    //     loading = the current state value. 
    //     setLoading = a function that allows you to update the loading value. When this function is called, React will re-render the component with the new state.
    //     */
    const [loading, setLoading] = useState(false);
    //     // Declaring state `messageList` and its updater function `setMessageList`, initializing it with an empty array
    const [messageList, setMessageList] = useState([]);

    //     // Declaring a function `fetchPosts` to fetch posts from the API
    const fetchPosts = () => {
        //         // Setting `loading` state to `true` to indicate data fetching is in progress
        setLoading(true);
        //         // Making a GET request to the API endpoint
        fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts")
            //             // Parsing the response as JSON
            .then((res) => res.json())
            //             // Updating `messageList` state with the parsed data
            .then((data) => setMessageList(data))
            //             // Logging any errors that occur during the fetch operation
            .catch((error) => console.error(error))
            //             /* 
            //             The finally() method of Promise instances schedules a function to be called when the promise is settled (either fulfilled or rejected). Regardless of success or failure, this ensures that the loading state is set to false to indicate that data fetching is complete. Setting loading to false removes the loading indicator, signaling to the user that the operation has finished.
            //             */
            .finally(() => setLoading(false));
    };

    //     // Using `useEffect` hook to call `fetchPosts` once when the component mounts (due to the empty dependency array `[]`)
    useEffect(() => {
        fetchPosts();
    }, []);

    //     // Declaring a function `addNewPost` to update `messageList` state with a new message
    const addNewPost = (newMessage) => {
        //         The messageList state is updated using the setMessageList function, which is a state updater provided by the useState hook.
        //         [newMessage, ...messageList] creates a new array where newMessage is the first element and ...messageList spreads the elements of the existing messageList array.
        //         newMessage is added at the beginning of the existing messageList array using the spread operator (...). This ensures that the new message is inserted at the front of the array, maintaining the order of messages. 
        //         setMessageList is called with the new array as an argument. This sets the state of messageList to the newly created array.*/
        setMessageList([newMessage, ...messageList]);
    };

    //     // Returning JSX to render the component UI
    return (
        <div className="main-wrapper">
            {/* When loading is true, a simple loading message saying "Loading..." is rendered.
              When loading is false, the content inside the else block is rendered. */}
            {loading ? <div>Loading...</div>
                : (
                    <>
                        {/* Rendering `PostMessage` component and passing `addNewPost` and `fetchPosts` as props */}
                        <PostMessage newMessage={addNewPost} fetchPosts={fetchPosts} />
                        <MessageList messageList={messageList} />
                    </>
                )}
        </div>
    );
};


