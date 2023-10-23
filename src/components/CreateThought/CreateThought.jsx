/* eslint-disable react/prop-types */
import { useState } from 'react';
import './CreateThought.css';

export const CreateThought = ({ onNewThought }) => {

  // State to store the message of the new thought
       const [message, setMessage] = useState('');
       const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState(false);
       const maxLength = 140;


       // Handler to post a new thought
       const handleSubmit = async (e) => {
        e.preventDefault();
        setHasAttemptedSubmit(true);

        const response = await fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', {
           method: 'POST',
           headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message })
           });


           const data = await response.json();
       
           if (response.ok) {
         onNewThought(data);
       } else {
        console.log('Error posting thought', data);
        throw new Error('Failed to post thought');
       }
       setMessage('');
        }

          // Validates the message length and provides a user message
const validateMessage = () => {
  if (!hasAttemptedSubmit) return ""; // Dont show any validation message until form has been submited.
    if (message.length < 5) return "Your message is too short. It need to be at least 5 letters 😔";
    if (message.length > maxLength) return "Your message is to long 😔";
    return "";
};

  return (
      // Render form to create a new thought
    <div className="create-thought-container">
        <form onSubmit={handleSubmit}>
        <h2>What is making you happy right now?</h2>
        <textarea
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="'If music be the food of love, play on.'-William Shakespeare"
       />
       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <span>{validateMessage()}</span>
        <span>{`${message.length}/${maxLength}`}</span>
       </div>
       <button type="submit">❤️ Send Happy Thought ❤️</button>
        </form>
    </div>
  );
};
