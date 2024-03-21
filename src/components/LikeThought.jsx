import { useState } from 'react'
import PropTypes from 'prop-types'

export const LikeThought = ({ message, index, setMessageUpdate, messageUpdate }) => {

  const [like, setLike] = useState(message.hearts)

  const handleClick = async (event) => {
    event.preventDefault();
    // Use the functional update pattern
    setLike((prevHearts) => prevHearts + 1);
  
    try {
      const response = await fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${message._id}/like`, {
        method: 'POST',
        body: JSON.stringify({ hearts: like }), // Send the updated hearts count
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        const updatedData = await response.json();
        setLike(updatedData.hearts);
      } else {
        console.error('Error adding like:', response.status);
      }
    } catch (error) {
      console.error('Error adding like:', error);
    }
  
    setMessageUpdate(!messageUpdate);
  };

  return (
    <>
      <div id="likes">
        <button type="button" className="heart" id={index} value={message._id} onClick={handleClick}>
          ❤️
        </button>
        <div id="amount">x{message.hearts}</div>
      </div>
    </>
  )
}

LikeThought.propTypes = {
  message: PropTypes.object,
  index: PropTypes.number,
  setMessageUpdate: PropTypes.func,
  messageUpdate: PropTypes.bool,
}