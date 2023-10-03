import { useState } from "react";
import { PostThoughtButton } from "../Formelements/PostThoughtButton";
import { Validation } from "./Validation";
import "./postThought.css";

export const PostThought = ({ apiUrl }) => {
    // Creating a useState for the value of the textarea aka the thought meant to be posted
    const [thought, setThought] = useState("");
    // Creating a useState for the errormessage that is to be shown in the p-tag of the validation component
    const [errorMessage, setErrorMessage] = useState("");

    // Function to change the state of thought/the value when an event occurs
    const handleThoughtUpdate = (event) => {
        setThought(event.target.value);
    }

    const handleThoughtSubmit = async (event) => {
        // Prevents default submit action of form
        event.preventDefault();

        await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            /* Makes the thought text to JSON format */
            body: JSON.stringify({ message: thought }),
        })
            .then((response) => {
                // If the response is ok show a log message
                if (!response.ok) {
                    // Handle error, show an error-smessage in validation p-tag
                    throw new Error("Response was not ok");
                }
            })
            .catch((error) => {
                console.error("Error posting thought", error);
                // Set the error message state
                setErrorMessage("Failed to post thought. Please try again.");
            });
    }

    return (
        <section className="post-thought-wrapper">
            <h2>What's making you happy right now?</h2>
            {/* /* Sets POST method-function for the onSubmit event */}
            <form>
                <textarea
                    name="thought"
                    rows="3"
                    placeholder="'In the world of imagination, let creativity flow' – ChatGPT"
                    value={thought} // Sets the thought-state as the value for the textarea
                    /* Sets event-handler-function for the onChange event */
                    onChange={handleThoughtUpdate}>
                </textarea>
                <Validation errorMessage={errorMessage} />
                <PostThoughtButton onClick={handleThoughtSubmit} />
            </form>
        </section>
    )
}
