
import { SingleMessage } from "./SingleMessage";
import "../css_Components/messageList.css"

export const MessageList = ({ messageList, fetchPosts }) => {
    return (
        <section className="message-list-wrapper">
            {messageList.map((singleMessage) => (
                <SingleMessage
                    key={singleMessage._id}
                    singleMessage={singleMessage}
                    fetchPosts={fetchPosts}
                />
            ))}
        </section>
    );
};


