import React, { useState } from 'react';

const ThoughtForm = ({ onThoughtSubmit }) => {

    const [message, setMessage] = useState('');    // A state for the message the user puts in
    const [error, setError] = useState(null);

    // Function to handle the input of users message
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (message.length < 5 || message.length > 140) {
            setError('The message must be between 5 and 140 characters.');
            return;
        }

        // Sends a POST to API for the new message
        try {
            const response = await fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message }),
            });

            if (response.ok) {
                setMessage('');
                setError(null);
                // Call a callback function to notify that a new thought has been added
                if (typeof onThoughtSubmit === 'function') {
                    onThoughtSubmit();
                }
            } else {
                // Display an error message if the POST request failed
                setError('An error occurred while posting your happy thoughts. Try again later!');
            }
        } catch (error) {
            console.error('Error posting thought:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>What is making you happy right now?</h2>
                <textarea
                    placeholder="Write your happy thoughts..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                {error && <p className="error">{error}</p>}
                <button type="submit">❤️ Send happy thoughts ❤️</button>
            </form>
        </div>
    );
};

export default ThoughtForm;
