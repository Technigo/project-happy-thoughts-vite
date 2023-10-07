

import { formatDistance } from "date-fns";
import { useState } from "react";
import "../css_Components/messageList.css"


export const SingleMessage = ({ singleMessage }) => {

    const [numLikes, setNumLikes] = useState(singleMessage.hearts);
    const [liked, setLiked] = useState(false);
    const messageId = singleMessage._id;

    const onLikeIncrease = async () => {
        try {
            const options = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ messageId }),
            };

            const response = await fetch(
                `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${messageId}/like`,
                options
            );

            if (!response.ok) {
                throw new Error('Failed to like the message');
            }

            const data = await response.json();
            setLiked(true);
            setNumLikes(data.hearts);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return <section className="single-message-wrapper">
        <p>{singleMessage.message}</p>
        <div className="message-info-wrapper">
            <div className="info-like">
                <button
                    className={`like-button ${liked ? "liked" : ""}`}
                    onClick={onLikeIncrease}>
                    <span className="emoji" aria-label="like button">❤️</span>
                </button>
                <span className="number-likes">x {numLikes}</span>
            </div>
            <div className="info-time">{formatDistance(new Date(singleMessage.createdAt), Date.now(), { addSuffix: true, })}</div>
        </div>
    </section>;
};

// Explanation:
// This SingleMessage component is designed to display individual messages from an API and manage the liking functionality. It renders a message, a like button, the number of likes, and the time elapsed since the message was posted, calculated using moment.js.


//When a user clicks the like button, a POST request is sent to the API to increment the like count for that specific message, the local like count state (numLikes) is updated, and the fetchPosts function is called to refresh the message list. The component also visually indicates whether a message has been liked by the user by changing the color of the like button.
// Hint This component does not use the useEffect hook at all ;)
// It's a POST method :)

// Here is a hint of that function :)
// const onLikeIncrease = async () => {
//   // Defining options for the fetch API call, specifying that the method should be "POST"
//   // - Making a POST request to the API to like a message, using the message's `_id` property to target the correct message
//   // - Parsing the response from the API as JSON
//   // - Updating the `numLikes` and `liked` state variables and fetching the updated posts
//   // - Logging any errors that occur during the fetch operation to the console
// };

