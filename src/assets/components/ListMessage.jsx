import { useState, useEffect } from "react";
import "./ListMessage.scss";
import { CardMessage } from "./CardMessage";
import { PostMessage } from "./PostMessage";
// import { LikeMessage } from "./LikeMessage";

export const ListMessage = () => {
  const apiUrl = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";
  const [messageList, setMessageList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [likeCount, setLikeCount] = useState(parseInt(localStorage.likes) || 0);
  const [newThought, setNewThought] = useState(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setMessageList(() => data);
        if (data) {
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
    fetchInterval();

    return () => {
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
      <div>
        <h2>Stats: You have ❤️ {likeCount} posts</h2>
      </div>
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
