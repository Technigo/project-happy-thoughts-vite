import { useEffect, useState } from "react"
import { Feed } from "./components/Feed"
import "./App.css"

export const App = () => {
  //Initialize state for storing dafault data
  const [thoughts, setThoughts] = useState([]) //Thought data

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
    //Handle errors here
  }

  //Fetch thoughts when component is mounted
  useEffect(() => {
    fetchHappyThoughts()
  }, [])

  //Return stuff
  return (
    <>
      <h1 className="delete">Project Happy Toughts 💌</h1>
      <div className="feed">
        {thoughts ? (
          <Feed thoughts={thoughts} />
        ) : (
          <div>
            <p>Loading...</p>
          </div>
        )}
      </div>
    </>
  )
}
