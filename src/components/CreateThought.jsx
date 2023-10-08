import { useEffect, useState } from "react";
import "../index.css";

export const CreateThought = ({ handleNewMessage, fetchMessages }) => {
    const [newThought, setNewThought] = useState("");
    const [errorStatus, setErrorStatus] = useState(false);
    const [shortMessageError, setShortMessageError] = useState("");

    const isMessageTooLong = newThought.length > 140;
    const isMessageTooShort = newThought.length < 5;

    const handleThoughtUpdate = (event) => {
        const message = event.target.value;
        setNewThought(message);

        // Clear the short message error whenever the user interacts with the textarea. If this line is omitted, the error message will only disappear when the number of characters > 4.
        setShortMessageError("");
    };

    const handleThoughtSubmission = async (event) => {
        event.preventDefault();

        const postUrl = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";
        if (isMessageTooShort) {
            setShortMessageError("Your message is too short, it needs at least 5 letters 😔");
        } else {
            try {
                const options = {
                    method: 'POST',
                    body: JSON.stringify({ message: newThought }),
                    headers: { "Content-Type": "application/json" },
                };
                const response = await fetch(postUrl, options);
                console.log(newThought);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                handleNewMessage(data);
                fetchMessages();
                setNewThought("");
            } catch (error) {
                console.error('Error submitting form:', error);
            }
        }
    };

    useEffect(() => {
        setErrorStatus(isMessageTooLong ? true : false);
    }, [newThought]);

    return (
        <div className="create-thought-wrapper">
            <h2>Share a happy thought!</h2>
            <form className="text-area">
                <textarea
                    id="createTextarea"
                    name="createTextarea"
                    aria-label="share a happy thought"
                    placeholder="'If music be the food of love, play on.' – William Shakespeare"
                    rows={3}
                    cols={50}
                    onChange={handleThoughtUpdate}
                    value={newThought}
                />
            </form>
            <div className="message-length">
                {isMessageTooShort && <p className="error">{shortMessageError}</p>}
                {errorStatus && <p className="error redErrorMessage">Your message is too long 😔</p>}
                <p className="length">{newThought.length}/140</p>
            </div>
            <button type="submit" onClick={handleThoughtSubmission} disabled={isMessageTooLong}>
                <span className="heart-emoji">❤️</span>
                Send Happy Thought
                <span className="heart-emoji">❤️</span>
            </button>
        </div>
    );
};
