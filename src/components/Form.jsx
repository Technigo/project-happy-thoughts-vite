import { useState } from 'react'

// useState hooks for sending a new thought and displaying it on top of the other messages
export const Form = () => {
    const [sendThought, setSendThought] = useState('')
    const [displayMessage, setDisplayMessage] = useState('')

    const handleTextarea = (event) => {
        setSendThought(event.target.value)
    }

    // Function for handling the onCLick event of the "Send a happy thought" button
    const handleSubmit = () => {
        fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: sendThought }),
        })
            .then((response) => response.json())
            .then((newThought) => {
                setDisplayMessage((setThoughts) => [newThought, ...setThoughts])
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <div id="form-container">
            <h2>What is making you happy right now?</h2>
            <div id="write-thought">
                <textarea 
                    placeholder="With freedom, flowers, books and the moon, who could not be perfectly happy? - Oscar Wilde" 
                    value={sendThought} 
                    onChange={handleTextarea} />
            </div>
            <div id="send-thought">
                <button 
                    className="send-button"
                    onClick={handleSubmit}>
                        <img 
                            src="like-heart.png" 
                            alt="heart icon" 
                            className="like-heart">
                        </img>
                            Send a happy thought
                        <img 
                            src ="like-heart.png" 
                            alt="heart icon" 
                            className="like-heart">
                        </img>
                </button>
            </div>
        </div>
    )
}