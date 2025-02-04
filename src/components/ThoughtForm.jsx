import { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

const API_URL = "https://project-happy-thoughts-api-lice.onrender.com"; 

const ThoughtForm = ({ onNewThought }) => {
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Input validation
    if (message.length < 5 || message.length > 140) {
      setError("Message must be between 5 and 140 characters.");
      return;
    }

    setIsSubmitting(true); // Disable the button while submitting

    try {
      const response = await fetch(`${API_URL}/thoughts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }), // Send the message as JSON
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send thought');
      }

      const newThought = await response.json(); // Get the response data
      onNewThought(newThought); // Pass the new thought to the parent component
      setMessage(''); // Clear the input field
      setError(null); // Clear any previous errors
    } catch (error) {
      console.error('Error sending thought:', error);
      setError(error.message); // Show error message to the user
    } finally {
      setIsSubmitting(false); // Re-enable the button
    }
  };

  return (
    <form onSubmit={handleSubmit} className="thought-form">
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="What's making you happy right now?"
        rows="3"
      />
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Posting...' : 'Post'}
      </button>
      {error && <p className="error-message">{error}</p>}
    </form>
  );
};

// ✅ PropTypes validation
ThoughtForm.propTypes = {
  onNewThought: PropTypes.func.isRequired,
};

export default ThoughtForm;
