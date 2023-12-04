import { SingleMessage } from './SingleMessage';

export const MessageList = ({ messageList, fetchPosts }) => {
    return (
      <div className='list-wrapper'>
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
  

