import { RecentHappyThoughts } from "./recentThoughts"
import { NewHappyThought } from "./newThought"
import { UpdateHearts } from "./likeHeart"
import { useState } from "react"

export const MainHappyThoughts = () => {
    const [messageList, setMessageList] = useState([])

    const newMessage = (data) => {
        // Update the message list with the new message
        setMessageList([data, ...messageList])


        // Automatically reload the page when a new message is received
        // I tried to just have the message pushed in with useEffect, without a reload, but did not make it, so this is plan B)
        window.location.reload(false)
    }

    return (
        <div className="allWrapper">
            <h1>Lets be happier together!</h1>
            <div className="newThoughts-container">
                <NewHappyThought newMessage={newMessage} />
            </div>
            <div className="recentThoughts-container">
                <RecentHappyThoughts />
            </div>
            <div className="likeHeart-Container">
                {messageList.map((message) => (
                    <UpdateHearts key={message._id} heartID={{ heartID: message._id, heartCount: message.hearts }} />
                ))}
            </div>
        </div>
    )
}
