import { useState, useEffect } from "react"
import { Header } from "./Header"
import { List } from "./List"
import { Form } from "./Form"

//Fetch Happy thougts from API server
export const HappyThoughts = () => {
  const [thoughts, setThoughts] = useState([])
  const [newThought, setNewThought] = useState("")

  useEffect(() => {
    fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts")
      .then((res) => res.json())
      .then((json) => {
        setThoughts(json)
      })
      .catch((error) => {
        console.error("Error loading thoughts", error)
      })
  }, [])

  const getNewThought = (event) => {
    setNewThought(event.target.value)
  }

  //Function for POST new thought

  const onFormSubmit = (event) => {
    event.preventDefault()

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: newThought,
      }),
    }
    fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts", options)
      .then((res) => res.json())
      .then((newThought) => {
        setThoughts((previousThought) => [
          newThought.response,
          ...previousThought,
        ])
        setNewThought("")
      })
      .catch((error) => {
        console.error("Error posting thought, please try again:", error)
      })
  }

  return (
    <div>
      <Header />
      <main className="main-wrapper">
        <div className="main-content">
          <Form
            newThought={newThought}
            onNewThoughtChange={getNewThought}
            onFormSubmit={onFormSubmit}
          />
          <List thoughts={thoughts} />
        </div>
      </main>
    </div>
  )
}
