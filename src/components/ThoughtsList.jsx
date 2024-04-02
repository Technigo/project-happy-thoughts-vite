import { useEffect, useState } from "react";
import { formatDistance } from "date-fns";

const APIURL = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts"

export const ThoughtsList = () => {
  const [thoughts, setThoughts] = useState([])
  const [like, setLike] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await fetch(APIURL)
      if (!response.ok) {
        throw new Error("Error!")
      }
      const json = await response.json()
      setThoughts(json)
    } catch (error) {
      console.error("Error!", error)
    }
  }

  const handleClick = async (thoughtId) => {
    try {
      const response = await fetch(`${APIURL}/${thoughtId}/like`, {
        method: "POST",
      })
      if (!response.ok) {
        throw new Error("Error!")
      }
      if (like.includes(thoughtId)) {

        setLike(like.filter((id) => id !== thoughtId))
      } else {

        setLike([...like, thoughtId])
      }
      fetchData()
    } catch (error) {
      console.error("Error!", error)
    }
  }

  return (
    <div className="thought-wrapper">
      {thoughts.map((thought) => (
        <div key={thought._id}>
          <p>{thought.message}</p>
          <button onClick={() => handleClick(thought._id)} className={`heart-btn${like.includes(thought._id) ? " clicked" : ""}`} aria-label="like button">
            ❤️
          </button>
          <div> x {thought.hearts}</div>
          <div className="info-time">
            {formatDistance(new Date(thought.createdAt), Date.now(), { addSuffix: true, })}
          </div>
        </div>
      ))}
    </div>
  )
}