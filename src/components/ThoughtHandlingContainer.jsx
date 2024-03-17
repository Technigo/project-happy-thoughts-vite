import { useEffect, useState } from "react";

import { ThoughtList } from "./ThoughtList";
import { CreateThought } from "./CreateThought";


export const ThoughtHandlingContainer = () => {
    const [messageList, setMessageList] = useState([]);


    const getUrl = "https://happy-thought-api.onrender.com/thoughts";

    useEffect(() => {
        fetchMessages(); // Fetch data initially when component mounts

        // Set up interval to fetch data every 10 seconds
        const intervalId = setInterval(() => {
            fetchMessages();

        }, 10000); // 1 hour 3600000. Change to 10000 as in 10 seconds later

        // Clear the interval when the component is unmounted
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array to run once on component mount


    const handleNewMessage = (newMessage) => {
        setMessageList((messageList) => [newMessage, ...messageList]);
    };


    const fetchMessages = async () => {
        try {
            const response = await fetch(getUrl);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const jsonData = await response.json();
            setMessageList(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    return (
        <>
            {console.log('my data is:', messageList)}
            <CreateThought
                handleNewMessage={handleNewMessage}
                fetchMessages={fetchMessages}
            />
            <ThoughtList messageList={messageList} />

        </>
    )
}
