import { useState, useEffect } from "react";
import "./ListMessage.scss";
import { CardMessage } from "./CardMessage";

export const ListMessage = () => {
  const apiUrl = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";
  const [messageList, setMessageList] = useState(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setMessageList(data);
        console.log(messageList);
      } catch (error) {
        console.error("Error Message:", error);
      }
    };

    const fetchInterval = () => {
      setInterval(fetchMessages, 50000);
    };

    fetchInterval();

    return () => {
      // Clear the interval when the component unmounts
      clearInterval(fetchInterval);
    };
  }, []);

  return (
    <div className="list-wrapper">
      {/* map */}
      {messageList &&
        messageList.map((message) => {
          return <CardMessage message={message} />;
        })}
    </div>
  );
};
