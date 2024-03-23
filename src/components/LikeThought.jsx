import { useState } from 'react'
import PropTypes from 'prop-types'

//Adds a like when you click on the heart button, and post it to the API
export const LikeThought = ({ message, index, setMessageUpdate, messageUpdate }) => {

  const [like, setLike] = useState(message.hearts)

  //Listening to the button and adds 1 like
  const handleClick = async (event) => {
    event.preventDefault();
    setLike((prevHearts) => prevHearts + 1);
  
    //Posts the like the API if the request is successfull and sets the messageUpdate to true to trigger a rerender
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