
import { SingleMessage } from "./SingleMessage";
import "../css_Components/messageList.css"

export const MessageList = ({ messageList }) => {
    return (
        <section className="message-list-wrapper">
            {messageList.map((singleMessage) => (
                <SingleMessage
                    key={singleMessage._id}
                    singleMessage={singleMessage}
                />
            ))}
        </section>
    );
};

