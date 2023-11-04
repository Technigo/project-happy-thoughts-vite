import { useState, useEffect } from "react";
import "./ListMessage.scss";
import { CardMessage } from "./CardMessage";
import { PostMessage } from "./PostMessage";
import { LikeMessage } from "./LikeMessage";

export const ListMessage = () => {
  const apiUrl = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";
  const [messageList, setMessageList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [likeCount, setLikeCount] = useState(parseInt(localStorage.likes) || 0);
  const [newThought, setNewThought] = useState(null);

  useEffect(() => {
    const fetchMessages = async () => {
      // console.log("Fetching");
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setMessageList(() => data); //  Function stopped state from updating twice
        if (data) {
          // Make sure "data" is actually fetched before render
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error Message:", error);
      }
    };
    const fetchInterval = () => {
      setInterval(fetchMessages, 5000);
    };
    fetchMessages();
    // fetchInterval();

    return () => {
      // Clear the interval when the component unmounts
      clearInterval(fetchInterval);
    };
  }, []);

  const checkNewMessage = (message) => {
    // Message timestamp
    const messageTimestamp = new Date(message.createdAt);
    const currentTime = new Date();
    // Calculate the difference in milliseconds
    const timeDiff = currentTime - messageTimestamp;
    // Check if message was created less that a minute ago
    return timeDiff <= 60000;
  };

  return (
    <>
      <PostMessage setMessageList={setMessageList} />
      <LikeMessage likeCount={likeCount} />
      <div className="list-wrapper">
        {isLoading ? (
          <p>Loading....</p>
        ) : (
          messageList?.map((message) => {
            // Check all the messages inside the list
            const isNewMessage = checkNewMessage(message);
            return (
              <CardMessage
                key={message._id}
                message={message}
                setLikeCount={setLikeCount}
                isNewMessage={isNewMessage}
              />
            );
          })
        )}
      </div>
    </>
  );
};
