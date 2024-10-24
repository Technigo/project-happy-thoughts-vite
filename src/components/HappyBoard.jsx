/* eslint-disable react/prop-types */

/**
 * This component is used to collect the user's Happy thought in a form and post it to the HappyWall. 
 */
import { useState } from "react"
import { BASE_URL } from "./BASE_URL"

const HappyBoard = ({ updateFormData }) => {
  const [body, setBody] = useState('')
  const [loading, setLoading] = useState(false)

  //Function to post happy thoughts
  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true) /* Start loading on submit */

    try {
      const response = await fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: body }), /* Send the body to HappyWall */
      })
    
    if (response.ok) {
      setBody('') /* Clear input field when posted */
      updateFormData()
    }
  } catch (error) {
    console.log("Error posting Happy Thought:", error)
  } finally {
    setLoading(false) /* Stop showing Loading */
  }
}

return (
  <div className="board-form">
    <h3>What's making you happy right now?</h3>{/* eslint-disable-line */}
    <form onSubmit={handleSubmit}>
      <textarea
        value={body}
        className="input-field"
        placeholder="Share your happiness!"
        onChange={(event) => setBody(event.target.value)}
      />
      <button
        className="submit-button"
        type="submit"
        disabled={loading}
      >
        {loading ? "Loading..." : "Submit ❤️"}{/* Loading? IfTrue show Loading... IfFalse show Submit ❤️ */} 
        </button>
    </form>
</div>
  )
}

export default HappyBoard

/**
* Summary:
 * This component displays an input field for what is making the enduser happy right now. The user's input is updated dynamically through the handleInputChange function.
*/