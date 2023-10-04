export const MessageList = ({ messageList, fetchPosts }) => {
    return (
      <div>
        <p>
          Map and display message list here
          <strong>
            Also, use the messageList prop te recieve Hint we bring in the Single
            Message here :)
          </strong>
        </p>
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