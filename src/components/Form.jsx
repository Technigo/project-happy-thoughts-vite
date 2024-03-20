import { useState } from "react"
import PropTypes from "prop-types"

//Component for input field
export const Form = () => {
  const [newPost, setNewPost] = useState("")

  return (
    <div className="form-container">
      <form className="input-form">
        <label htmlFor="form-input" className="input-label">
          What is making you happy right now?{" "}
        </label>
        <textarea
          className="input-field"
          id="form-input"
          rows="3"
          cols="30"
          value={newPost}
          placeholder="Happy thoughts here..."></textarea>

        <button type="submit" className="submit-button">
          ❤️ Send Happy Thought ❤️
        </button>
      </form>
    </div>
  )
}
