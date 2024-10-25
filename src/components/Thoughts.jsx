
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
      {thoughts.map((thought) => (
          <li key={thought._id}>{thought.message}</li> // I tried using both index and thought._id. the second option uses the unique number for each message whereas index creates its own unique numbers.
        ))};
      </ul>
    </section>
  );
};



