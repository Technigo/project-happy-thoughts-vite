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
        console.log("Successfully fetched data")
        setThoughts(json)
      })
      .catch((error) => {
        console.error("Error fetching thoughts:", error)
      })
  }

  //Fetch thoughts when component is mounted
  useEffect(() => {
    fetchHappyThoughts()
    //Timer to fetch data every 10 sec
    const fetchInterval = setInterval(fetchHappyThoughts, 10000)
    //Clean up interval when component unmounts
    return () => {
      clearInterval(fetchInterval)
    }
  }, [])

  //Handle new thoughts posted by fetching the form again
  const handleFormSubmit = (newThought) => {
    fetch(thoughtsURL, {
      method: "POST",
      body: JSON.stringify({ message: newThought }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to post thought")
        }
        return res.json()
      })
      .then((newThought) => {
        //Update the thoughts array by adding new though to the beginning
        setThoughts((previousThoughs) => [newThought, ...previousThoughs])
      })
      .catch((error) => {
        console.error("Error:", error)
      })
  }

  //Render app content
  return (
    <div className="app-container">
      <h1 onClick={() => location.reload()} className="title">
        Project Happy Toughts 💌
      </h1>
      <div className="form-feed-wrapper">
        {/* Pass handleFormSubmit function as prop so I can use it in Form*/}
        <Form handleFormSubmit={handleFormSubmit} />
        <div className="feed">
          {thoughts.length > 0 ? (
            <Feed thoughts={thoughts} fetchHappyThoughts={fetchHappyThoughts} />
          ) : (
            <div>
              <p>❤️ Be patient, we&apos;re fetching happy thoughts... ❤️</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
