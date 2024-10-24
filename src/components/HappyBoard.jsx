/* eslint-disable react/prop-types */

/**
 * This component is used to collect the user's Happy thought in a form and post it to the HappyWall. 
 */

const HappyBoard = ({ updateFormData, value }) => {
  const handleInputChange = (event) => {
    updateFormData("HappyBoard", event.target.value) // Update form data in App component
  }

  return (
    <div className="board-form">
      <h3>What's making you happy right now?</h3> {/* eslint-disable-line */}
      <textarea
        value={value}
        className="input-field"
        placeholder="Share your happiness!"
        rows="4"
        cols="50"
        minLength={5}
        maxLength={140}
        onChange={handleInputChange}
  />
  <button className="submit-button">Submit ❤️ </button>
</div>
  )
}

export default HappyBoard

/**
* Summary:
 * This component displays an input field for what is making the enduser happy right now. The user's input is updated dynamically through the handleInputChange function.
*/