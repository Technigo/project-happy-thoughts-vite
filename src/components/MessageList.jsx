import { SingleMessage } from './SingleMessage';

export const MessageList = ({ messageList, fetchPosts }) => {
    return (
      <div>
        {messageList.map((singleMessage) => (
          <SingleMessage
            key={singleMessage._id}
            singleMessage={singleMessage}
            fetchPosts={fetchPosts}
          />
        ))}
      </div>
    );
  };
  

// HINT
// {messageList.map((singleMessage) => (
//   <SingleMessage
//     key={singleMessage._id}
//     singleMessage={singleMessage}
//     fetchPosts={fetchPosts}
//   />
// ))}