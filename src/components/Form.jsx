import PropTypes from "prop-types"
import { useState } from "react"
import "./Form.css"

//Component for input field
export const Form = ({ handleFormSubmit }) => {
  const [newThought, setNewThought] = useState("")
  const [count, setCount] = useState(0)

  const handleChange = (event) => {
    setNewThought(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // Call the function passed from the parent component
    handleFormSubmit(newThought)
    //Clear form after posting
    setNewThought("")
    //Clear character count after posting
    setCount("0")
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
          onChange={(e) => {
            handleChange(e)
            setCount(e.target.value.length)
          }}
          placeholder="Happy thoughts here..."
        />
        <div className="button-counter-wrapper">
          <button type="submit" className="submit-button">
            ❤️ Send Happy Thought ❤️
          </button>
          <p className={`character-count ${count > 140 ? "turn-red" : ""}`}>
            {count}/140
          </p>
        </div>
      </form>
    </div>
  )
}

//Props validation
Form.propTypes = {
  handleFormSubmit: PropTypes.func.isRequired,
}
