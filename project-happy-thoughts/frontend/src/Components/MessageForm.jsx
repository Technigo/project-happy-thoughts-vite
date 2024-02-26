import { useState, useEffect } from "react";

export const MessageForm = ({ addNewMessage, fetchMessages }) => {
    /* state variables */
    const [newMessage, setNewMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    // Initialize a variable to store the API for thoughts
    const thoughtAPI = import.meta.env.VITE_BACKEND_API;

    /* Function to handle change in text area */
    const handleTextAreaChange = (e) => {
        setNewMessage(e.target.value);
    }

    /* Function to check if the message is too long */
    useEffect(() => {
        if (newMessage.length >= 141) {
            setErrorMessage("Your message is too long, it should only have max 140 characters");
        } else {
            setErrorMessage("");
        }
    }, [newMessage]); /* Dependency array includes newMessage, so the effect runs when newMessage changes, i.e. the user gets real-time updates on whether their message has exceeded the allowed length */

    /* Function to handle submission - when user clicks on submit button, the new message will be added to the message list */
    const handleFormSubmit = async (e) => {
        e.preventDefault();

        /* Check if the message is too short, if yes, show alert */
        if (newMessage.length <= 4) {
            setErrorMessage("Your message is too short, it needs at least 5 characters");
        } else {
        /* Otherwise, post new message to API*/
            await fetch(thoughtAPI, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    message: `${newMessage}`,
                })
            })
                .then((response) => response.json())
                .then((data) => {
                    /* Add the parsed data (which is the new message) to the message list */
                    addNewMessage(data);
                    /* Reset the new message and error message to empty strings */
                    setNewMessage("");
                    setErrorMessage("");
                    /* Fetch all recent messages */
                    fetchMessages();
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }

    return (
        <div className="new-message-wrapper">
            <h2>What&apos;s making you happy right now?</h2>
            
            <form>
                <textarea 
                    rows="3" 
                    placeholder="Type in something that makes you happy..." 
                    value={newMessage}
                    onChange={handleTextAreaChange}
                />
                <div className="message-length">
                    {/* Display error message */}
                    <p className="error">{errorMessage}</p>
                    {/* Display real-time change in count of characters of newMessage */}
                    <p className={`${newMessage.length}` >= 141 ? "red" : ""}>{newMessage.length}/140</p>
                </div>
                <button 
                    type="submit"
                    onClick={handleFormSubmit}
                    className="submit-button"
                    aria-label="button for posting the message"
                >
                    <span className="heart-emoji" aria-label="button for posting the message">❤️</span>
                        Send Happy Thoughts
                    <span className="heart-emoji" aria-label="button for posting the message">❤️</span>
                </button>
            </form>
        </div>
  )
}
