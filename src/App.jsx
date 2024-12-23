import { useState, useEffect } from "react"
// Import child components and style components used in the App component
import { Header } from "./components/Header"
import { ThoughtForm } from "./components/ThoughtForm"
import { ThoughtList } from "./components/ThoughtList"

import "./styles/App.css"

// Define the base URL for the API endpoint to fetch thoughts
const BASE_URL = "https://project-happy-thoughts-api-42bh.onrender.com/thoughts" //From backend Happy Thoughts API

export const App = () => {
  const [thoughts, setThoughts] = useState([]) // State to store the list of thoughts
  const [isLoading, setIsLoading] = useState(true) // State to track the loading status of the app

  useEffect(() => { // useEffect to fetch initial data on component mount
    const fetchThoughts = async () => { // Define an asynchronous function to fetch thoughts
      try {
        // Fetch thoughts data from the API
        const response = await fetch(BASE_URL)
        const result = await response.json()

        // Set the fetched data to state
        setThoughts(result)
      } catch (error) {
        console.error("Error fetching data:", error)
      } finally {
        setTimeout(() => setIsLoading(false), 400)
      }
    }
    // Call the fetch function
    fetchThoughts()
  }, [])

  // Function to handle adding a new thought to the list
  const handleNewThought = (newThought) => {
    // Update the state by adding the new thought to the beginning of the array
    setThoughts((prevThoughts) => [newThought, ...prevThoughts])
  }

  return (
    // Main container for the app
    <div className="App">
      {/*Header component */}
      <Header />
      {/* ThoughtForm component, passing down the function to handle new thoughts */}
      <ThoughtForm onNewThought={handleNewThought} />
      {/* ThoughtList component, passing down the thoughts data */}
      {/* Show loading message while data is being fetched */}
      {isLoading ? (
        <div className="loading-container">
          <h2>Loading happy thoughts...</h2>
        </div>
      ) : (
        <ThoughtList thoughts={thoughts} />
      )}
    </div>
  )
}









{/* Planning of components

// App Component: Main component that manages state and handles API calls.
// Header Component: Includes the header text and heart icon image and it is imported into and rendered within the App component.
// ThoughtForm Component: A form that allows users to submit new thoughts the form data is passed up to the App component.
// ThoughtHearts Component: Displays each individual thought with a like button and is a child of the ThoughtList component.
// ThoughtList Component: Responsible for displaying a list of thoughts passed down from the App component.

// Each component has it's separate CSS file*/ }

