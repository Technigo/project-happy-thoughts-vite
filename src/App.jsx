import { useState, useEffect } from "react"

import { PostMessage } from "./components/PostMessage"
import { Thoughts } from "./components/Thoughts/Thoughts"
import { Footer } from "./components/Footer"

export const App = () => {
  const [thoughts, setThoughts] = useState([])

  //Fetch existing thoughts
  const fetchThoughts = () => {
    fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts")
      .then(response => response.json())
      .then((json) => {
        setThoughts(json)
      })
      .catch((error) => {
        console.log("error:", error)
      })
  }

  //Using json from PostMessage to show new thought
  const showNewPost = (json) => {
    setThoughts((previousThoughts) => [json, ...previousThoughts])
  }
      
  //Start by fetching existing thoughts
  useEffect (() => {
    fetchThoughts()
  }, []
  )
  
  return (
    <div className="wrapper">
    <div className="app-field">
      <PostMessage showNewPost={showNewPost} />
      <div className="thoughts-section">
        {thoughts.map((thought) => (
          <Thoughts
            key={thought._id}
            id={thought._id}
            message={thought.message}
            likes={thought.hearts}
            time={thought.createdAt}
            fetchThoughts={fetchThoughts}
          />
        ))}
      </div>
    </div>
    <Footer />
    </div>
  )
}