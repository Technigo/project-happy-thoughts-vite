
import { useState, useEffect } from "react";
import { PostMessage } from "./components/PostMessage";


export const Distributive = () => {

    const [loading, setLoading] = useState(false);

    const [messageList, setMessageList] = useState([]);

    // Declaring a function `fetchPosts` to fetch posts from the API
    const fetchPosts = () => {
        // Setting `loading` state to `true` to indicate data fetching is in progress
        setLoading(true);
        // Making a GET request to the API endpoint
        fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts")
            // Parsing the response as JSON
            .then((res) => res.json())
            // Updating `messageList` state with the parsed data
            .then((data) => setMessageList(data))
            // Logging any errors that occur during the fetch operation
            .catch((error) => console.error(error))

            .finally(() => setLoading(false));
    };


    useEffect(() => {
        fetchPosts();
    }, []);

    const addNewPost = (newMessage) => {
        setMessageList([newMessage, ...messageList]);
    };


    return (
        <div className="main-wrapper">

            <PostMessage newMessage={addNewPost} fetchPosts={fetchPosts} />
        </div>
    );
};

