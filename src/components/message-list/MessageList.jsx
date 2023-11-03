import { SingleMessage } from "../single-message/SingleMessage.jsx";
import './messagelist.css';



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

