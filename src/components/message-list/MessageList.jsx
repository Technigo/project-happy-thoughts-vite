// import { SingleMessage } from "./";



export const MessageList = ({ newMessage, posts }) => {

    // const handleLikes = async (messageId) => {
    //     try {
    //         const response = await fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${messageId}/like`, {
    //             method: 'POST'
    //         });

    //         if (response.ok) {
    //             fetchPosts();
    //         } else {
    //             console.error('error like post');
    //         }
    //     } catch (error) {
    //         console.error('error', error);
    //     }
    // };


    return (
        <div>
            <h1>{newMessage}</h1>
            {posts}

            {/* {newPost.map((message) => {
                return (<div key={message._id}>{message.message}</div>)
            })} */}


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

// Evelyn's code
  // <SingleMessage key={SingleMessage._id}
//   {...SingleMessage}
//   fetchPosts={fetchPosts}
//   onLike={handleLikes} />