// Importing `useState` and `useEffect` hooks from "react" library
import { useState, useEffect } from "react";
// Importing `PostMessage` and `MessageList` components from respective files
import { PostMessage } from "./PostMessage";
import { MessageList } from "./MessageList";
import "./Distributive.css";

// Declaring a functional component named `Distributive`
export const Distributive = () => {
  // Declaring state `loading` and its updater function `setLoading`, initializing it with `false`
  const [loading, setLoading] = useState(false);

  // Declaring state `messageList` and its updater function `setMessageList`, initializing it with an empty array
  const [messageList, setMessageList] = useState([]);

  // Declaring a function `fetchPosts` to fetch posts from the API
  const fetchPosts = () => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    // Setting `loading` state to `true` to indicate data fetching is in progress
    setLoading(true);

    // Making a GET request to the API endpoint
    fetch(`${backendUrl}/thoughts`)
      // Parsing the response as JSON
      .then((response) => response.json())
      // Updating `messageList` state with the parsed data
      .then((data) => setMessageList(data))
      // Logging any errors that occur during the fetch operation
      .catch((error) => console.error(error))
      // Setting `loading` state to `false` once data fetching is complete
      .finally(() => setLoading(false));
  };

  // Using `useEffect` hook to call `fetchPosts` once when the component mounts (due to the empty dependency array `[]`)
  useEffect(() => {
    fetchPosts();
  }, []);

  // Declaring a function `addNewPost` to update `messageList` state with a new message
  const addNewPost = (newMessage) => {
    // Updating `messageList` state by adding `newMessage` at the beginning of the array
    setMessageList([newMessage, ...messageList]);
  };

  // Returning JSX to render the component UI
  return (
    <div className="main-wrapper">
      {/* Rendering `PostMessage` component and passing `addNewPost` and `fetchPosts` as props */}
      <PostMessage newMessage={addNewPost} fetchPosts={fetchPosts} />

      {loading ? (
        <p className="loading">Loading... ⏳</p>
      ) : (
        <MessageList messageList={messageList} fetchPosts={fetchPosts} />
      )}
    </div>
  );
};

// Explanation:
// The Distributive component serves as a container that manages the state and functions related to message fetching and posting in a message board application. Initially, it sets a loading state to manage the loading status and a messageList state to store the fetched messages. The fetchPosts function retrieves messages from an API and updates the messageList, while handling the loading status. Upon component mount, useEffect triggers fetchPosts to populate the initial messages. The addNewPost function allows adding a new message to the messageList state. The component renders PostMessage and MessageList components, passing down relevant states and functions as props to manage and display messages interactively.
