/**
 * HappyBoard Component
 * 
 * This component provides a form for users to submit a "happy thought."
 * It sends the user's input to an API, updates the list of thoughts upon submission, 
 * and handles loading states during the process.
 * 
 * Key Features:
 * - **Textarea for Input:**
 *   - Users can type a message about what makes them happy.
 *   - The `body` state, typed as a string, manages the content of the textarea.
 * 
 * - **Form Submission:**
 *   - When the form is submitted, the `handleSubmit` function is triggered.
 *   - The function sends a POST request to the API with the user's input.
 *   - If successful, the input field is cleared, and `updateFormData` (passed as a prop) is called to refresh the list of thoughts.
 * 
 * - **Loading State:**
 *   - While the form is being submitted, the `loading` state (a boolean) controls the "Loading..." indicator on the submit button.
 * 
 * TypeScript Integration:
 * - **Props Validation:**
 *   - Props are typed using the `HappyBoardProps` interface, ensuring `updateFormData` is a function that takes no arguments and returns nothing (`void`).
 * - **State Typing:**
 *   - `body`: A string representing the user's input.
 *   - `loading`: A boolean indicating whether the form is submitting.
 * - **Event Handling:**
 *   - The `handleSubmit` function is typed as `React.FormEvent<HTMLFormElement>` to handle form submissions safely.
 */

import { useState } from "react"
import { BASE_URL } from "./BASE_URL"

//TypeScript: Define the props for the HappyBoard component
interface HappyBoardProps {
  updateFormData: () => void // Function that performs an action/side effect (update the form data), but doesn't provide a result or return any value (void). 
}

// TypeScript: Pass HappyBoardProps interface as the parameter type in this component. 
const HappyBoard = ({ updateFormData }: HappyBoardProps) => {
  // TypeScript: Define state for the body as a string
  const [body, setBody] = useState('')
  //TypeScript: Define state for loading as a boolean
  const [loading, setLoading] = useState<boolean>(false)

  //Function to post happy thoughts
  //TypeScript: The parameter event is a DOM Event. The return type of the function is `void`, meaning it performs an action but does not return a value.
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
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
