import { useState } from "react";
import { MessageList } from "./MessageList.jsx";
import { NumberOfLikes } from "./NumberOfLikes.jsx";
import { MessageInput } from "./MessageInput.jsx";

export const Container = () => {
  const [messageData, setMessageData] = useState([]);
  const [totalNumberOfLikes, setTotalNumberOfLikes] = useState(() => {
    const storedLikes = localStorage.getItem("numberOfLikes");
    return storedLikes ? JSON.parse(storedLikes) : "";
  });
  return (
    <>
      <NumberOfLikes totalNumberOfLikes={totalNumberOfLikes} />
      <MessageInput setMessageData={setMessageData} />
      <MessageList
        messageData={messageData}
        setMessageData={setMessageData}
        totalNumberOfLikes={totalNumberOfLikes}
        setTotalNumberOfLikes={setTotalNumberOfLikes}
      />
      ;
    </>
  );
};
