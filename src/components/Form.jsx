import { useState, useEffect} from 'react'
import { RecentThought } from './RecentThought'

export const Form = () => {
    const [sendThought, setSendThought] = useState('')
    const [displayMessage, setDisplayMessage] = useState('')

    const handleTextarea = (event) => {
        setSendThought(event.target.value)
        event.prevent.default()
    }

    const handleSubmit = () => {
        fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: sendThought }),
        })
            .then((response) => response.json())
            .then((data) => {
                setDisplayMessage(data.message);
                // Do something with the response if needed
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

/*     useEffect(() => {
        fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts',
            method: 'POST',
            body: JSON.stringify(json.message))
            .then(data => data.json)
            .then(json = sendThought(json.message))
    }, []) */

    return (
        <div id="form-container">
            <h2>Write us a happy thought!</h2>
            <div id="write-thought">
                <textarea 
                    placeholder="hello hello" 
                    value={sendThought} 
                    onChange={handleTextarea} />
            </div>
            <div id="send-thought">
                <button 
                    onClick={handleSubmit}>Send!</button>
            </div>
           {/*  <div id="recent-thought">
                <RecentThought
                    key={displayMessage}
                    message={displayMessage} />
            </div> */}
        </div>
    )

    }
/* export const Form = () => {
    const [thought, setThought] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

    const handleInputChange = (event) => {
        setThought(event.target.value);
    };

    const handleSubmit = () => {
        fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: thought }),
        })
            .then((response) => response.json())
            .then((data) => {
                setResponseMessage(data.message);
                // Do something with the response if needed
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <div id="form-container">
            <h2>Write us a happy thought!</h2>
            <div id="write-thought">
                <textarea
                    placeholder="Write your happy thought here"
                    value={thought}
                    onChange={handleInputChange}
                />
            </div>
            <div id="send-thought">
                <button onClick={handleSubmit}>Send!</button>
            </div>
            <div id="response-message">{responseMessage}</div>
        </div>
    );
}; */

// API for posting thoughts POST https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts