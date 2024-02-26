import { useState } from "react";
import { formatDistance } from "date-fns";

export const SingleMessage = ({ message }) => {
    const [numLikes, setNumLikes] = useState(0);
    const [liked, setLiked] = useState(false);

    const thoughtAPI = import.meta.env.VITE_BACKEND_API;
    const messageId = message._id;
    const increaseLikes = async () => {
        // Defining options for the fetch API call, specifying that the method should be "POST"
        // Making a POST request to the API to like a message, using the message's `_id` property to target the correct message
        await fetch(`${thoughtAPI}/${messageId}/like`, {
            method: "PUT",
            headers: { "Content-Type": " application/json "},
            // Add messageId to the body to target the message
            body: JSON.stringify({messageId}) 
        }) 
            // Parsing the response from the API as JSON
            .then((response) => response.json())
            // Updating the `numLikes` and `liked` state variables
            .then((data) => {
                setLiked(true);
                setNumLikes((numLikes) => numLikes + 1);
            })
            // Logging any errors that occur during the fetch operation to the console
            .catch((error) => {
                console.log(error);
            });
    };

    

    return (
        <div className="single-message">
            <p>{message.message}</p>
            
            <div className="info-wrapper">
                <div className="likes">
                    <button 
                        type="button"
                        onClick={increaseLikes}
                        className="like-button"
                    >
                        <span className="heart-emoji" aria-label="like button">❤️</span>
                    </button>
                    <span className="number-of-likes">x{numLikes}</span>
                </div>
                <div className="time">
                    {formatDistance(new Date(message.createdAt), Date.now(), { addSuffix: true })}
                </div>
            </div>
                
        </div>
    )
}
