
import { SingleMessage } from "./SingleMessage";

export const MessageList = ({ messageList }) => {
    return (
        <div className="message-list-container">
            {messageList.map((message) => {
                return (                    
                    <SingleMessage key={message._id} message={message} />
                )
            })}
        </div>
    )
};
