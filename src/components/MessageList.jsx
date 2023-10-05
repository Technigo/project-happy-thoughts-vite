import { SingleMessage } from "./SingleMessage";

export const MessageList = ({ messageList, fetchPosts }) => {
    return (
        <div>
            <p>
                Map and display message list here
                {messageList.map((singleMessage) => (
                    <SingleMessage
                        key={singleMessage._id}
                        singleMessage={singleMessage}
                        fetchPosts={fetchPosts}
                    />
                ))}
                <strong>
                    Also, use the messageList prop to receive Hint we bring in the Single
                    Message here :)
                    {/* messageList(singleMessage); */}
                </strong>
            </p>
        </div>
    );
};

