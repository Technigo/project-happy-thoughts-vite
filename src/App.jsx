import { useState, useEffect } from 'react'
import './App.css'
import { PreviousThoughts } from './components/PreviousThoughts'
import { NewThought } from './components/NewThought'
import Lottie from 'lottie-react'
import animation from './animation.json'

export const App = () => {
  const [thoughts, setThoughts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const URL = 'https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts'

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
    setTimeout(() => {
      renderThoughts()
    }, 1500)
  }, [])

  return (
    <div className="main-container">
      {loading && (
        <div className="loading">
          <Lottie
            animationData={animation}
            loop
            autoPlay
            style={{ width: 200, height: 200 }}
          />
          <p>Loading...</p>
        </div>
      )}
      {!loading && (
        <>
          <NewThought thoughts={thoughts} setThoughts={setThoughts} URL={URL} />
          <PreviousThoughts thoughts={thoughts} />
        </>
      )}
    </div>
  )
}
