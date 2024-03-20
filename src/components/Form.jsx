import { useState } from "react"
import PropTypes from "prop-types"

//Component for input field
export const Form = () => {
  const [newPost, setNewPost] = useState("")

  const handleChange = (event) => {
    const newPost = event.target.value
    setNewPost(newPost)
    console.log(newPost)
  }

  return (
    <div className="form-container">
      <form className="input-form">
        <label htmlFor="form-input" className="input-label">
          What is making you happy right now?
        </label>
        <textarea
          className="input-field"
          id="form-input"
          value={newPost}
          onChange={handleChange}
          placeholder="Happy thoughts here..."></textarea>
        <button type="submit" className="submit-button">
          ❤️ Send Happy Thought ❤️
        </button>
      </form>
    </div>
  )
}
