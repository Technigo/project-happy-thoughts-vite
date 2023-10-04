import { useEffect, useState } from "react";
import "./thoughtCard.css";
import { LikeThought } from "../LikeThought/LikeThought";

export const ThoughtCard = ({ apiUrl }) => {
    // Sets an empty array as a state for the state with name thoughts, and creates a setter-function for changing thoughts
    const [thoughts, setThoughts] = useState([]);

    const handleThoughtFetch = async () => {
        await fetch(apiUrl)
            .then((response) => {
                // If the response isn't ok, throw an error message
                if (!response.ok) {
                    throw new Error("Response was not ok");
                } // Otherwise return the response as a JSON-object
                return response.json();
            })
            // Then set the thoughtsData as the value of the state thoughts
            .then((thoughtsData) => {
                setThoughts(thoughtsData);
            })
            // If something goes wrong, show an error in the console. 
            .catch((error) => {
                console.error("Error fetching thoughts", error);
            });
    }

    useEffect(() => {
        handleThoughtFetch();
    }, [])

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

    return (
        <section className="thought-wrapper">
            {/* Mapping thorugh the thoughts to get all individual values in their own card */}
            {thoughts.map((thought) => (
                <div className="thought-card" key={thought._id}>
                    <p id="thought">{thought.message}</p>
                    <div className="heart-section">
                        <div>
                            <LikeThought baseUrl={apiUrl} hearts={thought.hearts} id={thought._id} thoughts={thoughts} setThoughts={setThoughts} />
                        </div>
                        {/* thought.createdAt is used as the argument passed into the convertTimestamp function */}
                        <p className="time-passed">{convertTimestamp(thought.createdAt)}</p>
                    </div>
                </div>
            ))}
        </section>
    )
}
