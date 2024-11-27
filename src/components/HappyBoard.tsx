/* eslint-disable react/prop-types */

/**
 * HappyBoard Component
 * 
 * This component provides a form that allows users to submit a "happy thought."
 * 
 * - The component includes a textarea for user input, where users can type a message about what makes them happy.
 * - When the form is submitted, `handleSubmit` is triggered. The function handleSubmit sends the user's input to the API using a POST request, clears the textarea if the POST is successful and calls `updateFormData` (passed as a prop) to refresh the list of thoughts displayed on the wall.
 * - While the form is being submitted, the text `loading...` is displayed.
 * - `updateFormData` is a function passed from the `HappyWall` component to refresh the list of happy thoughts after a successful POST.
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
  <div className="board-box">
    <h2>What's making you happy right now?</h2>{/* eslint-disable-line */}
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
