import { useState, useEffect } from "react"
import { PostMessage } from "./components/PostMessage"
import { Thoughts } from "./components/Thoughts/Thoughts"

export const App = () => {
  const [thoughts, setThoughts] = useState([])

  //Fetch existing thoughts on start
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

  //Using json from PostMessage to show new thought
  const showNewPost = (json) => {
    setThoughts((previousThoughts) => [json, ...previousThoughts]);
  }
    
  return (
    <div className="app-field">
      <h1>Happy thoughts!</h1>
      <PostMessage showNewPost={showNewPost} />
      <div className="thoughts-section">
        {thoughts.map((thought) => (
          <Thoughts
            key={thought._id}
            id={thought._id}
            message={thought.message}
            likes={thought.hearts}
            time={thought.createdAt}
          />
        ))}
      </div>
    </div>
  );
}