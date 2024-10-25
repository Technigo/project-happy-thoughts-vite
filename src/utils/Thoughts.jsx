
import { useState,useEffect } from "react"

export const Thoughts = () => {
  const [thoughts, setThoughts] = useState([])

  const URL = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts"

  const fetchThoughts = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    setThoughts(data)
    console.log("Thought is", data)
  }

  useEffect(() => {
    fetchThoughts()
  }, []);
  
  return (
    <section>
      <ul>
      {thoughts.map((thought, index) => (
          <li key={index}>{thought.message}</li> // Assuming each thought object has a 'message' field
        ))}
      </ul>
    </section>
  )

}



