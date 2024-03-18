import { useState, useEffect } from 'react'
import { Form } from '../Form/Form'
import { List } from '../List/List'
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
  //total like you gave in total
  const [likeCount, setLikeCount] = useState([])

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
  useEffect(() => {
    const storedLikes = localStorage.getItem('likeCount')
    if (storedLikes) {
      setLikeCount(parseInt(storedLikes, 10))
    }
  }, [])
  //update localStorage when a new like it's added
  useEffect(() => {
    localStorage.setItem('likeCount', likeCount.toString())
  }, [likeCount])

  console.log(likeCount)

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
        setLikeCount((prevCount) => prevCount + 1)
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
      <div className="loadingIcon">
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
    <>
      <div className="postLiked">Posts that you like: {likeCount}</div>
      <Form
        thought={thought}
        onNewThought={handleNewThought}
        onSubmit={handleSubmit}
      />
      <List list={list} formatDate={formatDate} handleNewLike={handleNewLike} />
    </>
  )
}
