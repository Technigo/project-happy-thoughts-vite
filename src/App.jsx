import { useState, useEffect } from "react";
import { Thoughts } from "./components/Thoughts/Thoughts"

export const App = () => {
  const [thoughts, setThoughts] = useState([])

  useEffect (() => {
    fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts")
      .then(response => response.json())
      .then((json) => {
        setThoughts(json);
      })
      .catch((error) => {
        console.log("error:", error)
      })
  }, []
  )

  return (
    <div className="app-field">
      <h1>Hello</h1>
      <div className="thoughts-section">
       {thoughts.map(thought => (
        <Thoughts 
          key={thought._id} 
          message={thought.message}
          likes={thought.hearts}
          time={thought.createdAt}
          />
       ))}
      </div>
    </div>
  )
}