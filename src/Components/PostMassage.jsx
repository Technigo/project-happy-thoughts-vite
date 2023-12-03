// PostMessage.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const PostMessage = ({ onMessageSubmit }) => {
  const [newMessage, setNewMessage] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Check if the new message is not empty
    if (newMessage.trim() !== '') {
      onMessageSubmit(newMessage);
      setNewMessage(''); // Reset the input after submitting
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <textarea
        id="newMessage"
        rows="3"
        placeholder="Share your happy thought..."
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      ></textarea>
      <button type="submit" aria-label="button for submitting your happy thought">
        Submit Happy Thought
      </button>
    </form>
  );
};

PostMessage.propTypes = {
  onMessageSubmit: PropTypes.func.isRequired,
};

export default PostMessage;

