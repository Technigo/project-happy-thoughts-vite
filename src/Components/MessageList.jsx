import { SingleMessage } from "./SingleMessage";


export const MessageList = ({ messageList, fetchPosts, handleLike }) => {


  return (
    <div>
      {messageList.map((singleMessage) => (
        <SingleMessage
          key={singleMessage._id}
          singleMessage={singleMessage}
          fetchPosts={fetchPosts}
          handleLike={handleLike}
        />
      ))}
    </div>
  );
};
