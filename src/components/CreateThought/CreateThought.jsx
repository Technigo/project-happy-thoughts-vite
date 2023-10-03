import { useState } from 'react';
import './CreateThought.css';

export const CreateThought = ({ onNewThought }) => {
       const [message, setMessage] = useState('');
       const maxLength = 140;

       const handleSubmit = async (e) => {
        e.preventDefault();

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
       }
       setMessage('');
        }

const validateMessage = () => {
    if (message.length < 5) return "Your message is too short. It need to be at least 5 letters 😔";
    if (message.length > maxLength) return "Your message is to long 😔";
    return "";
};

  return (
    <div className="create-thought-container">
        <form className='onSubmit'>
        <h2>What is making you happy right now?</h2>
        <textarea
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
