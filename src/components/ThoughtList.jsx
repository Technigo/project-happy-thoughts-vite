/* eslint-disable react/prop-types */
import { useState, useEffect } from "react"
import { ThoughtHeart } from "./ThoughtHeart"
import "../styles/ThoughtList.css"

export const ThoughtList = ({ thoughts }) => {
  console.log("Initial thoughts passed as prop:", thoughts); // Debugging input data
  const [updatedLikes, setUpdatedLikes] = useState(thoughts)

  useEffect(() => {
    const likedThoughts = JSON.parse(localStorage.getItem("likedThoughts")) || []
    const thoughtsWithLikes = thoughts.map((thought) => {
      const isLiked = likedThoughts.includes(thought._id)
      return {
        ...thought,
        liked: isLiked,
      }
    })
    setUpdatedLikes(thoughtsWithLikes)
  }, [thoughts])

  // Function to calculate "time ago" for each thought
  const timeAgo = (createdAt) => {
    const now = new Date() // Get the current date and time
    const timeDifference = Math.floor((now - new Date(createdAt)) / 1000) // Calculate difference in seconds

    // Return formatted time based on how long ago the thought was created
    if (timeDifference < 60) {
      return `${timeDifference} seconds ago` // Less than 1 minute
    } else if (timeDifference < 3600) { // Less than an hour
      const minutes = Math.floor(timeDifference / 60)
      return `${minutes} minutes ago`
    } else if (timeDifference < 86400) { // Less than a day
      const hours = Math.floor(timeDifference / 3600)
      return `${hours} hours ago`
    } else {
      const days = Math.floor(timeDifference / 86400)
      return `${days} days ago` // More than 1 day
    }
  }

  // Function to increase the like count for a thought
  const increasedLike = (thoughtId) => {
    // Update the like count and liked state when a heart is clicked
    setUpdatedLikes((prevLikes) =>
      prevLikes.map((thought) =>
        thought._id === thoughtId
          ? { ...thought, hearts: thought.hearts + 1, liked: true } // Mark it as liked
          : thought
      )
    )

    // Update localStorage with the liked thought ID
    const likedThoughts = JSON.parse(localStorage.getItem("likedThoughts")) || []
    if (!likedThoughts.includes(thoughtId)) {
      likedThoughts.push(thoughtId)
      localStorage.setItem("likedThoughts", JSON.stringify(likedThoughts))
    }
  }

  return (
    <div className="thought-list">
      {updatedLikes.map((thought) => (
        <div key={thought._id}>
          <div className="thought-message-box">
            <p>{thought.message}</p>
            <div className="heart-container">
              <ThoughtHeart
                thoughtId={thought._id}
                onLike={increasedLike}
                liked={thought.liked} // Pass the 'liked' prop from ThoughtList
              />
              <p className="heart-count">x {thought.hearts}</p>
            </div>
            {thought.createdAt && ( // Check if createdAt is present
              <p className="time-ago">{timeAgo(thought.createdAt)}</p> // Display "time ago"
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
