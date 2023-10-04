import { useState, useEffect } from "react"

import { RepliesList } from "./components/RepliesList"
import { RepliesInput } from "./components/RepliesInput"
import { Header } from "./components/Header"

export const App = () => {
  const [replies, setReplies] = useState([])
  const [newReplies, setNewReplies] = useState('')
  const [apiError, setApiError] = useState(null);
  const [likedMessage, setLikedMessage] = useState([])
  const [newThoughtAdded, setNewThoughtAdded] = useState(false)
  const [loading, setLoading] = useState(true)


  const onNewRepliesChange=(event)=>{setNewReplies(event.target.value)}

  const fetchReplies = async () => {
    try {
      const response = await fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts")
      const responseData = await response.json()
      console.log(responseData)
      setReplies(responseData)
    } catch (error) {
      console.error("failed to fetch recent thoughts", error)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchReplies()
  }, [])

  const repliesSubmit = async () => {
    event.preventDefault()
    const options = {
      method : 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body : JSON.stringify({
        message: newReplies
      })
    }
    
      try {
        const response = await fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts", options)
        
        if (!response.ok) {
          const errorData = await response.json();
          console.error("API is saying there is error", errorData.message)
          setApiError(errorData.message)
        } else {
          setNewThoughtAdded(true)
          setTimeout(() => {
            setNewThoughtAdded(false)
          }, 500)
        }
        
        fetchReplies();
      } catch (error) {
        console.error("failed to send replies", error)
      }
  }

  const increaseHeart = async (id, message) => {

    const options = {
      method: 'POST'
    }
    try {
      await fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${id}/like`, options)
      setLikedMessage([...likedMessage, message])
      fetchReplies()
    } catch (error) {
      console.error("unable to like", error)
    }

  }

  return (
    <div className="App">
    <Header />
    <RepliesInput 
      newReplies={newReplies}
      onNewRepliesChange={onNewRepliesChange}
      onFormSubmit={repliesSubmit}
    />
    {loading ? (
      <p>loading ...</p>
    ) : (
      <RepliesList repliesProp={replies} onIncreaseHeart={increaseHeart} newThoughtAdded={newThoughtAdded}/>
    )}
    
    <h3>liked messages</h3>
    {likedMessage.map((message, index) => (
      <p key={index}>{message}</p>
    ))}
    </div>
    )
};
