import { SingleMessage } from "../singlemessage/SingleMessage.jsx";
import './messagelist.module.css';



export const MessageList = ({ posts, fetchPosts }) => {

    return (
        <div className="message-list-container">

            {posts.map((singleMessage) => (
                <div className="message-container" key={singleMessage._id}>
                    <SingleMessage
                        key={singleMessage._id}
                        singleMessage={singleMessage}
                        fetchPosts={fetchPosts}
                    />
                </div>
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

// Evelyn's code
  // <SingleMessage key={SingleMessage._id}
//   {...SingleMessage}
//   fetchPosts={fetchPosts}
//   onLike={handleLikes} />