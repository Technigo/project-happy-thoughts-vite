import { useState } from 'react'
import PropTypes from 'prop-types'

export const NewThought = ({ setThoughts, URL }) => {
  const [newThought, setNewThought] = useState('')

  const handleInputChange = (e) => {
    setNewThought(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    postMessage()
  }

  const postMessage = () => {
    fetch(URL, {
      method: 'POST',
      body: JSON.stringify({ message: newThought }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((nextThought) => {
        setThoughts((previousThoughts) => [nextThought, ...previousThoughts])
        setNewThought('')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className="new-message">
      <form className="message-form" onSubmit={handleSubmit}>
        <h1>What makes you happy right now?</h1>
        <label>
          <textarea
            rows="4"
            cols="50"
            type="text"
            placeholder="Share your thoughts"
            value={newThought}
            onChange={handleInputChange}
          />
        </label>
        <input type="submit" required value="❤️ Send Happy Thougts ❤️" />
      </form>
    </div>
  )
}

NewThought.propTypes = {
  setThoughts: PropTypes.func.isRequired,
  URL: PropTypes.string.isRequired,
}
