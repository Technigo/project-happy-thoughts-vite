import { useState } from 'react'
import moment from 'moment'
import "./SingleMessage.css"

export const SingleMessage = ({ singleMessage, fetchPosts }) => {
    const [numLikes, setNumLikes] = useState(singleMessage.numLikes)
    const [liked, setLiked] = useState(singleMessage.liked)

    const onLikeIncrease = async () => {
        try {
            const response = await fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${singleMessage._id}/like`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ liked: !liked }),
            })

            if (response.ok) {
                setNumLikes(liked ? numLikes - 1 : numLikes + 1)
                setLiked(!liked)

                fetchPosts()
            } else {
                console.error('Failed to like the message')
            }
        } catch (error) {
            console.error('Error while liking the message', error)
        }
    }
    
    return (
        <div className="single-message">
            <p>{singleMessage.message}</p>
            <button onClick={onLikeIncrease} className={liked ? 'liked' : ''}>
                ❤️
            </button>
            <span className="num-likes">x{numLikes}</span>
            <span className="time-elapsed">
                {moment(singleMessage.timestamp).fromNow()}
            </span>
        </div>
    )
}

// Explanation:
// This SingleMessage component is designed to display individual messages from an API and manage the liking functionality. It renders a message, a like button, the number of likes, and the time elapsed since the message was posted, calculated using moment.js. When a user clicks the like button, a POST request is sent to the API to increment the like count for that specific message, the local like count state (numLikes) is updated, and the fetchPosts function is called to refresh the message list. The component also visually indicates whether a message has been liked by the user by changing the color of the like button.
// Hint This component does not use the useEffect hook at all ;)
// It's a POST method :)

// Here is a hint of that function :)
// const onLikeIncrease = async () => {
//   // Defining options for the fetch API call, specifying that the method should be "POST"
//   // PROMISE LAND;)
//   // - Making a POST request to the API to like a message, using the message's `_id` property to target the correct message
//   // - Parsing the response from the API as JSON
//   // - Updating the `numLikes` and `liked` state variables and fetching the updated posts
//   // - Logging any errors that occur during the fetch operation to the console
// };