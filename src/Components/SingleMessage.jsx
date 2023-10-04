/* eslint-disable react/prop-types */
// import { useState } from "react";
import { formatDistance } from "date-fns";

export const SingleMessage = ({ message }) => {
    // const [numLikes, setNumLikes] = useState(0);
    // const [liked, setLiked] = useState()

    // const likeAPI = "<https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/THOUGHT_ID/like>";
    // const onLikeIncrease = async () => {
        // Defining options for the fetch API call, specifying that the method should be "POST"
        // - Making a POST request to the API to like a message, using the message's `_id` property to target the correct message
        // await fetch(likeAPI)
        //     .then((response) => response.json())
        //     .then((data) => {
        //         console.log(data);
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });
        // - Parsing the response from the API as JSON
        // - Updating the `numLikes` and `liked` state variables and fetching the updated posts
        // - Logging any errors that occur during the fetch operation to the console
    // };

    return (
        <div className="single-message">
            <p>{message.message}</p>
            
            <div className="info-wrapper">
                <div className="likes">
                    <button 
                        type="button"
                        // onClick={onLikeIncrease}
                        className="like-button"
                    >
                        <span className="heart-emoji" aria-label="like button">❤️</span>
                    </button>
                    <p>x{message.hearts}</p>
                </div>
                <div className="time">
                    {formatDistance(new Date(message.createdAt), Date.now(), { addSuffix: true })}
                </div>
            </div>
                
        </div>
    )
}
