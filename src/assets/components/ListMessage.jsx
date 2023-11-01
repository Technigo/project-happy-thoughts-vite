import { useState, useEffect } from "react";
import "./ListMessage.scss";
import { CardMessage } from "./CardMessage";

export const ListMessage = () => {
  //   const [loading, setLoading] = useState(true);
  const apiUrl = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";
  const [messageList, setMessageList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setMessageList(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error Message:", error);
      }
      console.log("Its working!", messageList);
    };
    fetchMessages();

    const fetchInterval = () => {
      setInterval(fetchMessages, 5000);
    };

    fetchInterval();

    return () => {
      clearInterval(fetchInterval);
    };
  }, []);

  return (
    <div className="list-wrapper">
      {/* map */}
      {isLoading ? <p>Loading data...</p> : <CardMessage />}
    </div>
  );
};
