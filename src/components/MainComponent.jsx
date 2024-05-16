import { useState, useEffect } from 'react'
import { PreviousThoughts } from './PreviousThoughts'
import { NewThought } from './NewThought'
import Lottie from 'lottie-react'
import animation from '../animation.json'

//Fetches and triggers the previous messages from the API and shows an animation until the fetch is done. It contains the form and the content of the previous messages as children.
export const MainComponent = () => {
  const [thoughts, setThoughts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [messageUpdate, setMessageUpdate] = useState(false)

  const URL = 'https://happy-thinking.onrender.com/thoughts'

  const renderThoughts = () => {
    fetch(URL)
      .then((response) => response.json())
      .then((thoughts) => {
        setThoughts(thoughts)
        setLoading(false)
      })
      .catch((err) => {
        setError(err)
        console.log(error)
        setLoading(false)
      })
  }

  useEffect(() => {
    renderThoughts()
  }, [messageUpdate])

  return (
    <div className="main-container">
      {loading && (
        <div className="loading">
          <div id="lottie">
            <Lottie
              animationData={animation}
              loop
              autoPlay
              style={{ width: 200, height: 200 }}
            />
          </div>
          <h2>Loading..</h2>
        </div>
      )}
      {!loading && (
        <>
          <NewThought thoughts={thoughts} setThoughts={setThoughts} URL={URL} />
          <PreviousThoughts
            thoughts={thoughts}
            URL={URL}
            setMessageUpdate={setMessageUpdate}
            messageUpdate={messageUpdate}
          />
        </>
      )}
    </div>
  )
}
