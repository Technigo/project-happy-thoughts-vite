import { SingleMessage } from "./SingleMessage";

import './MessageList.css'

export const MessageList = ({ messageList, fetchPosts }) => {
    return (
        <div className="message-list-container">

            {messageList.map((singleMessage) => (
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

