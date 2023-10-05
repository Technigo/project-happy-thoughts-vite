import { SingleMessage } from './SingleMessage';

export const MessageList = ({ messageList, fetchPosts }) => {
    return (
      <div className='message-wrapper'>
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
  

