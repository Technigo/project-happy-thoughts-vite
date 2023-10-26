
import './singlemessage.css';
import { formatDistance } from 'date-fns';

export const SingleMessage = ({ singleMessage, fetchPosts }) => {

    const onLikeIncrease = async (thoughts_id) => {
        // Defining options for the fetch API call, specifying that the method should be "POST"
        const options = {
            // Specifying the request method as POST
            method: "POST",
            // Setting the content type of the request to application/json
            headers: { "Content-Type": "application/json" },
        };

        try {
            const response = await fetch(
                `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thoughts_id}/like`,
                options
            );
            // Not processing the data returned from API, as a GET request through fetchPosts() is carried out afterwards, so not needed/unactivated:
            const data = await response.json();

            // Calling `fetchPosts` function (passed as prop) to re-fetch posts
            fetchPosts(data);
        }
        // Logging any errors that occur during the fetch operation
        catch (error) {
            console.log(error)
        }
    };
    return (
        <>
            <p>{singleMessage.message}</p>
            <div className="post-container">
                <div className="heart-like">
                    <button
                        type="button"
                        className="heart-btn"
                        id='heartBtn'
                        onClick={() => onLikeIncrease(singleMessage._id)}
                    >
                        <span className="heart" aria-label='like button'>❤️</span>
                    </button>
                    <span className="number-likes"> x {singleMessage.hearts}</span>
                </div>
                <span className="time-passed"> {
                    formatDistance(
                        new Date(singleMessage.createdAt),
                        Date.now(),
                        { addSuffix: true }
                    )} </span>


            </div>
        </ >
    );
};

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