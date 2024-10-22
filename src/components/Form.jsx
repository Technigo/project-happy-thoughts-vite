import { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes


const MessageForm = ({ onThoughtAdded }) => {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setMessage(e.target.value);
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate message length (must be between 5 and 140 characters)
    if (message.length < 5 || message.length > 140) {
      setError('Message must be between 5 and 140 characters long.');
      return;
    }

    try {
      const response = await fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) {
        throw new Error('Failed to post the thought');
      }

      const data = await response.json();
      setMessage(''); // Clear the input field
      onThoughtAdded(data); // Callback to notify parent component
    } catch (err) {
      setError('An error occurred while posting the thought.');
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Write a happy thought (5-140 characters):
        <textarea
          value={message}
          onChange={handleChange}
          rows="4"
          cols="50"
          placeholder="Your happy thought..."
        />
      </label>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Post Thought</button>
    </form>
  );
};

MessageForm.propTypes = {
  onThoughtAdded: PropTypes.func.isRequired,
};

export default MessageForm;
