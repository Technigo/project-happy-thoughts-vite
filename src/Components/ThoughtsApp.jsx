import { useState, useEffect } from 'react'
import { Form } from './Form'
import { List } from './List'
export const ThoughtsApp = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [list, setList] = useState([])
  const [thought, setThought] = useState('')
  const thoughtsAPI = 'https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts'

  useEffect(() => {
    fetch(thoughtsAPI)
      .then((response) => response.json())
      .then((list) => {
        const sortedList = list.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        )
        setList(sortedList)
        setLoading(false)
      })
      .catch((error) => {
        setError(error)
        setLoading(false)
      })
  }, [])
  const handleNewThought = (event) => {
    setThought(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    fetch(thoughtsAPI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: thought }),
    })
      .then((res) => res.json())
      .then((newThought) => {
        setList((previousThoughts) => [newThought, ...previousThoughts])
        setThought('') // Clear the thought after submission
      })
  }
  const handleNewLike = (thoughtId) => {
    fetch(`${thoughtsAPI}/${thoughtId}/like`, {
      method: 'POST',
    })
      .then((res) => res.json())
      .then((updatedThought) => {
        const updatedList = list.map((thought) =>
          thought._id === updatedThought._id ? updatedThought : thought
        )
        setList(updatedList)
      })
  }

  const formatDate = (dateString) => {
    const options = {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }
    const date = new Date(dateString)
    return date.toLocaleString('en-US', options)
  }
  if (loading) {
    return <div>Loading....</div>
  }
  if (error) {
    return (
      <div>
        Error: we couldn<>&apos;</>t retrieve some data for you, try realoding
        the page.
      </div>
    )
  }
  return (
    <div>
      <Form
        thought={thought}
        onNewThought={handleNewThought}
        onSubmit={handleSubmit}
      />
      <List list={list} formatDate={formatDate} handleNewLike={handleNewLike} />
    </div>
  )
}
