import { useState } from 'react'
const thoughtsAPI = 'https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts'
export const Form = () => {
  const [thought, setThoughts] = useState('')
  const handleNewThought = (event) => {
    setThoughts(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    fetch(thoughtsAPI, {
      method: 'POST',
      body: JSON.stringify({ message: thought }),
    })
      .then((res) => res.json())
      .then((newThought) => {
        setThoughts((previousThoughts) => [newThought, ...previousThoughts])
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        What<>&apos;</>s making you happy right now?
        <input
          type="text"
          value={thought}
          onChange={handleNewThought}
          placeholder="Write some text..."
        />
      </label>
      <button type="submit">❤️ Send Happy Thought ❤️</button>
    </form>
  )
}
