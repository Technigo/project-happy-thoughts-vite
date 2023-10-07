// Importing necessary libraries and components
import { useState } from "react";  // Importing the useState hook from React
import Button from "../button/Button";  // A custom Button component
import Card from "../card/Card";  // A custom Card component
import styles from "./Form.module.css";  // CSS module for styling

// Defining the React component 'Form' using a functional component
const Form = ({ addPost }) => {
    // Using the useState hook to create a state variable 'message' and a function to update it 'setMessage'
    const [message, setMessage] = useState("");
    const [sending, setSending] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const sendThought = async () => {
        // Check if the message is too short
        if (message.length < 5) {
            setErrorMessage("Your message is too short, it needs at least 5 characters 😔");
            return; // Exit the function early if there's an error
        }

        // Check if the message is too long
        if (message.length > 140) {
            setErrorMessage("Your message is too long 😔");
            return; // Exit the function early if there's an error
        }

        try {
            setSending(true); // Set the 'sending' state to true to indicate the message is being sent

            // Send a POST request to the server
            const result = await fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ message }),
            });

            const data = await result.json(); // Parse the response as JSON

            if (!result.ok) {
                // If the response is not okay, throw an error with the error message from the server
                throw new Error(data.message);
            }

            // Reset the message and error message states
            setMessage("");
            setErrorMessage("");

            // Add the new post to the existing list of posts
            addPost({
                id: data._id,
                hearts: data.hearts,
                message: data.message,
                createdAt: data.createdAt,
            });
        } catch (error) {
            // If an error occurs, set the error message state with the error message
            setErrorMessage(error.message);
        } finally {
            // Regardless of success or failure, set the 'sending' state back to false
            setSending(false);
        };
    }


    // This is the JSX code that defines what the component will render
    return (
        <Card className={styles.inputCard}>
            <label className={styles.label} htmlFor="message">What&apos;s making you happy right now?</label>
            <textarea
                id="message"
                rows="3"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="'If music be the food of love, play on.' - William Shakespeare"
                className={styles.input}
            />
            <div className={styles.information}>
                <p className={styles.characters}>{errorMessage}</p>
                <p className={styles.characters}>{`${message.length}/140`}</p>
            </div>
            <Button
                onClick={sendThought}
                disabled={sending}
                className={styles.send}
            >
                ❤️ Send Happy Thought ❤️
            </Button>
        </Card>
    );
}

// Exporting the component as the default export of this module
export default Form;
