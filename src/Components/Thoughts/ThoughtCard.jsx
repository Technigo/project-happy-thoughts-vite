import "./thoughtCard.css";
import { LikeThought } from "../LikeThought/LikeThought";

export const ThoughtCard = ({ apiUrl, thoughts }) => {

    // Function to convert the timestamp in the JSON to a readable format, including making it a "XX minutes since format"
    const convertTimestamp = (timestamp) => {
        // Gets the time of the post, timestamp is a placeholder/parameter, that gets used further down in the actual return statement as an argument
        const timeOfPost = new Date(timestamp);
        // Gets the current time so we can compare the times
        const currentTime = new Date();
        // Floors timestamp, subtracts time of post from current time and then converts to minutes
        const differenceinTime = Math.floor((currentTime - timeOfPost) / (1000 * 60));

        // If the difference is less than 60 minutes, show one message
        if (differenceinTime < 60) {
            return `${differenceinTime} min ago`;
        } // If difference is less than 120 minutes, show that it was about one hour ago 
        else if (differenceinTime < 120) {
            return `about 1 hour ago`;
        } // If difference is less than 180 minutes, show that it was about two hour ago 
        else if (differenceinTime < 180) {
            return `about 2 hours ago`;
        } // In all other cases show that it was more than XX hours ago.
        return `more than ${Math.floor(differenceinTime / 60)} hours ago`;
    }

    // Handle empty or undefined thoughts array
    if (!thoughts || thoughts.length === 0) {
        return (
            <div className="thought-wrapper">
                <p>No thoughts available.</p>
            </div>
        );
    }

    console.log(thoughts);
    return (
        <section className="thought-wrapper">
            {/* Mapping thorugh the thoughts to get all individual values in their own card */}
            {thoughts && thoughts.map((thought) => (
                <div className="thought-card" key={thought._id}>
                    <p id="thought">{thought.message}</p>
                    <div className="heart-section">
                        <div>
                            <LikeThought baseUrl={apiUrl} hearts={thought.hearts} id={thought._id} />
                        </div>
                        {/* thought.createdAt is used as the argument passed into the convertTimestamp function */}
                        <p className="time-passed">{convertTimestamp(thought.createdAt)}</p>
                    </div>
                </div>
            ))}
        </section>
    )
}
