import PropTypes from "prop-types"
import { useState } from "react"
import "./Form.css"

//Component for input field
export const Form = ({ handleFormSubmit }) => {
  const [newThought, setNewThought] = useState("")

  const handleChange = (event) => {
    setNewThought(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // Call the function passed from the parent component
    handleFormSubmit(newThought)
    //Clear form after posting
    setNewThought("")
  }

  return (
    <div className="form-container">
      <form className="input-form" onSubmit={handleSubmit}>
        <label htmlFor="form-input" className="input-label">
          What is making you happy right now?
        </label>
        <textarea
          className="input-field"
          id="form-input"
          value={newThought}
          onChange={handleChange}
          placeholder="Happy thoughts here..."></textarea>
        <button type="submit" className="submit-button">
          ❤️ Send Happy Thought ❤️
        </button>
      </form>
    </div>
  )
}

//Props validation
Form.propTypes = {
  handleFormSubmit: PropTypes.func.isRequired,
}
