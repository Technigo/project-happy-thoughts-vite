import { useState } from "react";

const APIURL = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts"

export const ThoughtsForm = () => {
  const [newThought, setNewThought] = useState('')
  const [error, setError] = useState("")

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      const response = await fetch(APIURL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: newThought }),
        })
      
        if (!response.ok) {
        throw new Error("Error!")
      }
      setNewThought("")
    } catch (error) {
      setError("Error!")
      throw new Error("Error", error)
    }
  }

  const handleInputChange = event => {
    setNewThought(event.target.value)
  }

  return (
    <div className="new-thought-wrapper">
      <h2>What&#39;s making you happy right now?</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <textarea
          className="text-area"
          rows="5"
          cols="30"
          minLength={5}
          maxLength={140}
          value={newThought}
          onChange={handleInputChange}
          placeholder="Happy thoughts here please!"
        />
        <br />
        <button type="submit" className="submit-button" aria-label="submit button">❤️ Send Happy Thought ❤️</button>
      </form>
    </div>
  )
}
