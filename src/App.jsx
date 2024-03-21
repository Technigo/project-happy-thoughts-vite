import { useEffect, useState } from "react"
import { Feed } from "./components/Feed"
import { Form } from "./components/Form"
import "./App.css"

export const App = () => {
  //Initialize state for storing dafault data
  const [thoughts, setThoughts] = useState([])

  //Define API endpoints
  const thoughtsURL = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts"

  //Function to fetch data from API
  const fetchHappyThoughts = () => {
    fetch(thoughtsURL)
      .then((result) => result.json())
      .then((json) => {
        console.log(json)
        setThoughts(json)
      })
      .catch((error) => {
        console.error("Error fetching thoughts:", error)
      })
  }

  //Fetch thoughts when component is mounted
  useEffect(() => {
    fetchHappyThoughts()
  }, [])

  //Handle new thoughts posted by fetching the form again
  const handleFormSubmit = (newThought) => {
    fetch(thoughtsURL, {
      method: "POST",
      body: JSON.stringify({
        message: newThought,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to post thought")
        }
        //Fetch updated array after posting
        fetchHappyThoughts()
        return res.json()
      })
      .catch((error) => {
        console.error("Error:", error)
      })
  }

  //Return stuff
  return (
    <div className="app-container">
      <h1 className="title">Project Happy Toughts 💌</h1>
      <div className="form-feed-wrapper">
        {/* Pass handleFormSubmit function as prop */}
        <Form handleFormSubmit={handleFormSubmit} />
        <div className="feed">
          {thoughts.length > 0 ? (
            <Feed thoughts={thoughts} />
          ) : (
            <div>
              <p>Loading...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
