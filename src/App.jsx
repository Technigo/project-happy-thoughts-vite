import { useEffect, useState } from "react"
import { Feed } from "./components/Feed"
import { Form } from "./components/Form"
import Lottie from "lottie-react"
import animationData from "./assets/lottie-loading.json"
import "./App.css"

export const App = () => {
  //Initialize state for storing dafault data
  const [thoughts, setThoughts] = useState([])
  const [loading, setLoading] = useState(true)

  //Define API endpoints
  const thoughtsURL = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts"

  //Function to fetch data from API
  const fetchHappyThoughts = () => {
    setLoading(true)
    fetch(thoughtsURL)
      .then((result) => result.json())
      .then((json) => {
        setThoughts(json)
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error fetching thoughts:", error)
        setLoading(false)
      })
  }

  //Fetch thoughts when component is mounted
  useEffect(() => {
    fetchHappyThoughts()
    //Timer to fetch data every 10 sec
    const fetchInterval = setInterval(fetchHappyThoughts, 10000)
    //Clean up interval with global function clearInterval when component unmounts
    return () => {
      clearInterval(fetchInterval)
    }
  }, [])

  //Handle new thoughts posted throught the Form component
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
        Project Happy Thoughts 💌
      </h1>
      <div className="form-feed-wrapper">
        {/* Pass handleFormSubmit function as prop so I can use it in Form*/}
        <Form handleFormSubmit={handleFormSubmit} />
        <div className="feed">
          {loading ? (
            <div className="lottie-container">
              <Lottie className="lottie" animationData={animationData} />
            </div>
          ) : (
            <Feed thoughts={thoughts} fetchHappyThoughts={fetchHappyThoughts} />
          )}
        </div>
      </div>
    </div>
  )
}
