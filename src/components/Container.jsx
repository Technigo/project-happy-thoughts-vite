import { useState } from "react";
import { MessageList } from "./MessageList.jsx";
import { NumberOfLikes } from "./NumberOfLikes.jsx";
import { MessageInput } from "./MessageInput.jsx";
import { Header } from "./Header.jsx";

export const Container = () => {
  const [messageData, setMessageData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalNumberOfLikes, setTotalNumberOfLikes] = useState(() => {
    const storedLikes = localStorage.getItem("numberOfLikes");
    return storedLikes ? JSON.parse(storedLikes) : "0";
  });
  return (
    <div className="container">
      <Header />
      <div className="likes-container">
        <NumberOfLikes totalNumberOfLikes={totalNumberOfLikes} />
      </div>
      <MessageInput loading={loading} setLoading={setLoading} setMessageData={setMessageData} />
      <MessageList
        loading={loading}
        setLoading={setLoading}
        messageData={messageData}
        setMessageData={setMessageData}
        totalNumberOfLikes={totalNumberOfLikes}
        setTotalNumberOfLikes={setTotalNumberOfLikes}
      />
    </div>
  );
};
