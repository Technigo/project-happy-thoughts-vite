import { useState, useEffect } from 'react'
import './thoughtsApp.css'
import { Form } from './Form'
import { List } from './List'
import loadingIcon from './icons8-loading.gif'

export const ThoughtsApp = () => {
  // loading initial value is true so it displays immediatly, waiting for the fetch
  const [loading, setLoading] = useState(true)
  //displaying an error in case the API can't be fetched
  const [error, setError] = useState(null)
  // general list of all messagges
  const [list, setList] = useState([])
  //list for new messagges
  const [thought, setThought] = useState('')

  const thoughtsAPI = 'https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts'
  // inside the useEffect hook I fetch the API, I sort the data in descending order and I update the list with the sorted items.
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
  //in this function I handle the value input from user (a new thought)
  const handleNewThought = (event) => {
    setThought(event.target.value)
  }
  //in this function I handle the submit event of the form, this include making a POST request to the specific API and with the new data I update the list array using the spread sintax
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
  //in this function I handle the number of likes, I fetched from a different endpoint and with the new data I update the list to add the likes to the messages in the array only if the ids are matching otherwise remain unchanged
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
  //function to format the date as I wanted.
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
    return (
      <div>
        <img src={loadingIcon} alt="loading-icon"></img>
      </div>
    )
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
