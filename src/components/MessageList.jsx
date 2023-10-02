import { useEffect } from "react";
// import { SingleMessage } from "./SingleMessage";
export const MessageList = ({ newPost, thoughts }) => {
  // console.log(newPost, thoughts);
  return (
    <div className="message">
      {thoughts.map((singleThought) => {
        return (
          <p key={singleThought._id}>
            {singleThought.message} - {newPost}
          </p>
        );
      })}
    </div>
  );
};
