import { useState } from 'react'
import PropTypes from 'prop-types'

export const LikeThought = ({ message, index, renderThoughts }) => {

  const [like, setLike] = useState(message.hearts)
  console.log(like)

  const handleClick = async (event) => {
    event.preventDefault();
    setLike(like + 1);

    fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${message._id}/like`, {
      method: 'POST',
      body: JSON.stringify({hearts: like}),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => {
        setLike(data.hearts)
    })
      .catch((err) => {
        console.log(err)
      })
    renderThoughts()
  }


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
  renderThoughts: PropTypes.func,
}