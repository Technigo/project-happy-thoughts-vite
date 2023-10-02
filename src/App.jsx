import { useState, useEffect } from "react"

import { RepliesList } from "./components/RepliesList"
import { RepliesInput } from "./components/RepliesInput";

export const App = () => {
  const [replies, setReplies] = useState([])
  const [newReplies, setNewReplies] = useState('')

  const onNewRepliesChange=(event)=>{setNewReplies(event.target.value)}

  const fetchReplies = async () => {
    try {
      const response = await fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts")
      const responseData = await response.json()
      console.log(responseData)
      setReplies(responseData)
    } catch (error) {
      console.error("failed to fetch recent thoughts", error)
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
        await fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts", options)
        fetchReplies();
      } catch (error) {
        console.error("failed to send replies", error)
      }
  }

  return (
    <div className="App">
    <RepliesInput 
      newReplies={newReplies}
      onNewRepliesChange={onNewRepliesChange}
      onFormSubmit={repliesSubmit}
    />
    <RepliesList repliesProp={replies}/>
    </div>
    )
};
