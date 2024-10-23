// SubmitThought.jsx 

// First, we import what we need
import { useState } from 'react'; // We need useState to handle the input value

// Create the component that receives onSubmit as a prop from App.jsx
export const SubmitThought = ({ onSubmit }) => {
  // Create a state variable 'message' and a function to update it 'setMessage'
  // Initially the message is an empty string ''
  const [message, setMessage] = useState('');
  
  // This function runs when the form is submitted
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the page from refreshing when form is submitted
    
    // Make a POST request to the API
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', {
      method: 'POST', // Specify that this is a POST request
      headers: {
        'Content-Type': 'application/json' // Tell the API we're sending JSON
      },
      body: JSON.stringify({ message: message }) // Convert our message to JSON
    })
      .then(res => res.json()) // Convert the API response to JSON
      .then(newThought => {
        setMessage(''); // Clear the input field
        onSubmit(newThought); // Send the new thought back to App.jsx to update the list
      });
  };

  // The JSX (HTML) that will be rendered
  return (
    <form onSubmit={handleSubmit} className="submit-form">
      <h2>What's making you happy right now?</h2>
      <textarea
        value={message} // The current value of the input
        onChange={(e) => setMessage(e.target.value)} // Update state when user types
        className="thought-input"
        placeholder="Write your happy message here..."
      />
      <button type="submit" className="submit-button">
        ❤️ Send Happy Thought ❤️
      </button>
    </form>
  );
};