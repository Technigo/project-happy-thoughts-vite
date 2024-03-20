import { useState, useEffect } from "react"
import { PostMessage } from "./components/PostMessage"
import { Thoughts } from "./components/Thoughts/Thoughts"

export const App = () => {
  const [thoughts, setThoughts] = useState([])
  const [newThought, setNewThought] = useState("")
  //const [submit, setSubmit] = useState(false);
  const [postedMessage, setPostedMessage] = useState("")

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

  //Set NewThought to the value of inputted message
  const handleNewMessage = (event) => {
    setNewThought(event.target.value)
  }

  //Post a new thought when submit-button is pressed
  const handlePostSubmit = (event) => {
        event.preventDefault()
        fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts", {
        method: "POST",
        body: JSON.stringify({
          message: newThought,
        }),
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json)
          setPostedMessage(json.message)
        });
      /*.then((newThought) => {
            setThoughts((previousThoughts) => [newThought, ...previousThoughts])
          })*/
  }
    
  return (
    <div className="app-field">
      <h1>Happy thoughts!</h1>
      <PostMessage onPostSubmit={handlePostSubmit} onNewMessage={handleNewMessage} newThought={newThought}/>
      <p>{postedMessage}</p>
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