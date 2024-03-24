import { useState } from "react";
import { MessageList } from "./MessageList.jsx";
import { NumberOfLikes } from "./NumberOfLikes.jsx";

export const Container = () => {
  const [totalNumberOfLikes, setTotalNumberOfLikes] = useState(() => {
    const storedLikes = localStorage.getItem("numberOfLikes");
    return storedLikes ? JSON.parse(storedLikes) : "";
  });
  return (
    <>
      <NumberOfLikes totalNumberOfLikes={totalNumberOfLikes} />
      <MessageList totalNumberOfLikes={totalNumberOfLikes} setTotalNumberOfLikes={setTotalNumberOfLikes} />;
    </>
  );
};
