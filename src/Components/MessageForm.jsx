/* eslint-disable react/no-unescaped-entities */

import { useState, useEffect } from "react";

export const MessageForm = () => {
    /* state variables */
    const [newMessage, setNewMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    // Initialize a variable to store the API for thoughts
    const thoughtAPI = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

    /* Function to post message to API */
    const postMessage = async () => {
        await fetch(thoughtAPI, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                message: `${newMessage}`,
            })
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                /* call the fetchMessages function, which needs to be passed in as props in this component */
                
            })
            .catch((error) => {
                console.log(error);
            });
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
    const handleFormSubmit = (e) => {
        e.preventDefault();

        /* Check if the message is too short, if yes, show alert, otherwise, post it to the API */
        if (newMessage.length <= 4) {
            setErrorMessage("Your message is too short, it needs at least 5 characters");
        } else {
            postMessage()
        }
    }

    return (
        <div className="new-message-wrapper">
            <h2>What&apos;'s making you happy right now?</h2>
            
            <form>
                <textarea rows="3" placeholder="Type in something that makes you happy..."></textarea>
                <div className="message-length">
                    some function
                </div>
                <button 
                    type="submit"
                    // onClick={submit}
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
