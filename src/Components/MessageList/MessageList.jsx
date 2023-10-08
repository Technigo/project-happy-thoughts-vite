


export const MessageList = ({ messages, fetchPosts }) => {

    const handleLikes = async (messageId) => {
        try {
            const response = await fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${messageId}/like`, {
                method: 'post'
            });

            if (response.ok) {
                fetchPosts();
            } else {
                console.log('error like post');
            }
        } catch (errors) {
            console.log('error', errors);

        }
    };




    return (
        <div>
            {messages.map(message => (
                <Message key={message._id} {...message} onlike={handleLikes} />

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