import { useEffect, useState } from "react"
import { Header } from "./components/Header.jsx"
import { Form } from "./components/Form.jsx"
import { Feed } from "./components/Feed.jsx"

export const App = () => {
  // Define state and default value
  const [thought, setThought] = useState([])

  // Connect API and fetch data for the feed
  const API = "https://project-happy-thoughts-api-d2f4.onrender.com/thoughts"

  const fetchData = async () => {
    try {
      const response = await fetch(API)
      if (!response.ok) {
        throw new Error("Failed to fetch happy thoughts")
      }
      const data = await response.json()
      setThought(data)
    } catch (error) {
      console.error("Error fetching data", error)
    }
  }

  useEffect(() => {
    fetchData()
    //Timer to fetch data every 5 seconds
    const idInterval = setInterval(fetchData, 5000)
    return () => {
      clearInterval(idInterval)
    }
  }, [])

  const addThought = (newThought) => {
    const thoughtKey = Date.now() //using time as key
    const thoughtAndKey = {
      ...newThought,
      _id: thoughtKey,
    }
    setThought([thoughtAndKey, ...thought])
  }

  return (
    <>
      <Header />
      <div className='main-wrapper'>
        <Form
          newThought={addThought}
          apiURL={API}
          fetchData={fetchData}
        />
        <Feed thoughtData={thought} />
      </div>
    </>
  )
}
