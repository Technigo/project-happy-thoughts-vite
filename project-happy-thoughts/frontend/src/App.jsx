import { useState, useEffect } from "react";
import { Header } from "./Components/Header";
import { MessageForm } from "./Components/MessageForm";
import { MessageList } from "./Components/MessageList";

export const App = () => {
  // Initialize state for the list of recent messages
  const [messageList, setMessageList] = useState([]);
  // Initialize state for "loading" and its setter function "setLoading" to "false"
  const [loading, setLoading] = useState(false);

  // Initialize a variable to store the API for thoughts
  const thoughtAPI = import.meta.env.VITE_BACKEND_API;

  // Define an asynchronous function "fetchRecentThoughts" to fetch the thoughts from the API
  const fetchMessages = async () => {
      // Set "loading" state to true to indicate data fetching is in progress
      setLoading(true);
      // Use 'fetch' to make an API call to the defined URL
      await fetch(thoughtAPI)
          // Convert the raw response to JSON format
          .then((response) => {
              return response.json();
          })
          // Process JSON data and update messageList with the parsed data
          .then((cleanInfo) => {
              setMessageList(cleanInfo);
          })
          // Log errors that occur during the fetch operation
          .catch((error) => {
              console.log(error);
          })
          // Set "loading" state to false once data fetching is complete
          .finally(() => setLoading(false));
  }

  useEffect(() => {
      fetchMessages();
  }, []) // Dependency array set to be empty to ensure that the effect only runs once

  /* Function to add new messages to the message list */
  const addNewMessage = (newMessage) => {
      setMessageList([newMessage, ...messageList]);
  }

  return (
    <div className="main-wrapper">
      <Header />
      <div className="message-components-wrapper">
        <MessageForm addNewMessage={addNewMessage} fetchMessages={fetchMessages}/>
        {loading ? (
          <p className="loading">LOADING...</p>
        ) : (
          <MessageList messageList={messageList}/>
        )}
      </div>
    </div>
  )
};
