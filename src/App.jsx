import { useState, useEffect } from "react";
//import { Thoughts } from "./components/Thoughts/Thoughts"

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
  }, [thoughts]
  )

  return (
    <div className="app-field">
      Hello
      <div className="thoughts-section">
       {thoughts.map(thought => (
        <div className="thought-box" key={thought._id}>
          <p>{thought.message}</p>
          <p>{thought.hearts}</p>
          <p>{thought.createdAt}</p>
        </div>
       ))}
      </div>
    </div>
  )
}
