import { useState, useEffect } from "react";
import { SingleMessage } from "./SingleMessage";

export const MessageList = () => {
    // Initialize a state for the thoughts
    const [messageList, setMessageList] = useState([]);

    // Initialize a variable to store the API for thoughts
    const thoughtAPI = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

    // Define an asynchronous function "fetchRecentThoughts" to fetch the thoughts from the API
    const fetchRecentMessage = async () => {
        // Use 'fetch' to make an API call to the defined URL
        await fetch(thoughtAPI)
            // Convert the raw response to JSON format
            .then((response) => {
                return response.json();
            })
            // Process JSON data
            .then((cleanInfo) => {
                setMessageList(cleanInfo);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    useEffect(() => {
        fetchRecentMessage();
    }, [])

    messageList.map((message) => {
        return (
        <div key={message.id}>
            <SingleMessage message={message} />
        </div>
        )
    })
};
