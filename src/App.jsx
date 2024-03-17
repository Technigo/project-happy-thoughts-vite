import { Header } from "./components/Header.jsx"
import { Form } from "./components/Form.jsx"
import { Feed } from "./components/Feed.jsx"
import "./styling/app.css"
import { useEffect, useState } from "react"


// Create a thought/ connecting with Form.jsx
// Implementing Like system


export const App = () => {
// Define state and default value
  const [thought, setThought] = useState([])
  const [totalLikes, setTotalLikes] = useState(
    parseInt(localStorage.getItem("totalLikes")) || 0
  )

// Connect API and fetch data for the feed
    const API = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts"

    const fetchData = async () => {
      
      const startTime = Date.now();

      try {
        const response = await fetch(API)
        if (!response.ok) {
          throw new Error("Failed to fetch happy thoughts")
        }
        const data = await response.json()
        setThought(data)
      } catch (error) {
        console.error("Error fetching data", error)
      } finally {
        const elapsedTime = Date.now() - startTime
        const remainingTime = Math.max(0, minimumLoadingTime - elapsedTime);

        setTimeout(() => {
          setLoading(false);
          console.log("Success fetching data");
        }, remainingTime);
      } 
    }

    useEffect(() => {
      fetchData()
      //Timer to fetch data every 5 seconds
      const timeInterval = setTimeInterval(fetchData, 5000)
      return () => {
        clearInterval(timeInterval)
      }
    }, [])

    // useEffect hook to save the total likes to localStorage
    useEffect(() => {
      localStorage.setItem("totalLikes", totalLikes.toString())
    }, [totalLikes])

    const addThought = (newThought) => {
      const thoughtKey = Date.now() //using time as key
      const thoughtAndKey = {
        ...newThought,
        _id: thoughtKey,
      }
      setThought([thoughtAndKey, ...thought])
    }

  return <div>Find me in src/app.jsx!</div>
}
