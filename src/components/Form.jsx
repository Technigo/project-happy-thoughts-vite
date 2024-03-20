import { useState } from "react"

//Component for input field
export const Form = () => {
  const [thoughts, setThoughts] = useState("")
  const [newThought, setNewThought] = useState("")

  const handleChange = (event) => {
    const newThoughtInput = event.target.value
    setNewThought(newThoughtInput)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()

    fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts", {
      method: "POST",
      body: JSON.stringify({
        message: newThought,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to post thought")
        }
        return res.json()
      })

      .then((newThought) => {
        //Clear form after successful submission
        setNewThought("")
        //Update state with the new thought
        setNewThought((previousThoughts) => [newThought, ...previousThoughts])
      })
      .catch((error) => {
        console.error("Error:", error)
      })
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
          value={newThought}
          onChange={handleChange}
          placeholder="Happy thoughts here..."></textarea>
        <button
          type="button"
          className="submit-button"
          onClick={handleFormSubmit}>
          ❤️ Send Happy Thought ❤️
        </button>
      </form>
    </div>
  )
}
