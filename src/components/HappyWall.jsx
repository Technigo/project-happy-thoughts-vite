/* eslint-disable react/prop-types */

/**
 * This component is used to show the users' posted Happy thoughts on a wall, a feed.  
 */

import { useEffect, useState } from "react"

const BASE_URL = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts"

const HappyWall = () => {
  const [thoughts, setThoughts] = useState([]
  
  useEffect(() => {
    const fetchThoughts = async () => {
      try {
        const response = await fetch(BASE_URL) /* Fetch from API */
        const data = await response.json() /* Convert API response to JSON */
        setThoughts(data)
      } catch (error) {
        console.log("Error fetching Happy thoughts:", error)
      }
    }
    fetchThoughts()
  }, []) /* Empty array to make side effect run once and avoid looping */

    return (
      <div className="wall-form">
        <h3>Happy Wall</h3>
        <p>Here you can read and like posted thoughts!</p>
      </div >
    )

export default HappyWall


/**
* Summary:
 * This component...
*/