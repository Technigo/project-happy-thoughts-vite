
import { Header } from "./Header"
import { useState, useEffect } from "react"
import { ThoughtForm } from "./ThoughtForm"
import { ThoughtList } from "./ThoughtList"


export const HappyThoughts = () => {
  const [thoughts, setThoughts] = useState([]);
  const [newThought, setNewThought] = useState("")

  useEffect(() => {
    fetch("https://project-happy-thoughts-api-j0eg.onrender.com/thoughts")
      .then(res => res.json())
      .then((json) => {
        setThoughts(json.response)
      })
      .catch(error => {
        console.error('Fel vid hämtning av tankar:', error); // Logga eventuella fel
      });
  }, []); // Se till att denna rad är korrekt

  const handleNewThought = (event) => {
    setNewThought(event.target.value)
  }

  //Function to POST new Happy Thoughts
  const onFormSubmit = (event) => {
    event.preventDefault()


    const PostOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: newThought,
      }),
    }

    fetch(
      "https://project-happy-thoughts-api-j0eg.onrender.com/thoughts",
      PostOptions
    )
      .then((res) => res.json())
      .then((newThought) => {
        setThoughts((previousThoughts) => [
          newThought.response,
          ...previousThoughts,
        ])
        setNewThought("")
      })
      .catch((error) => {
        console.error("Error posting Happy Thought:", error)
      })
  }

  return (
    <div>
      <Header />
      <main className="main-wrapper">
        <div className="main-content">
          <ThoughtForm
            newThought={newThought}
            onNewThoughtChange={handleNewThought}
            onFormSubmit={onFormSubmit}
          />
          <ThoughtList thoughts={thoughts} />
        </div>
      </main>
    </div>
  )
}