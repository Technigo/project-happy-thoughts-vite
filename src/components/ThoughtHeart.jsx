/* eslint-disable react/prop-types */
import { useState, useEffect } from "react"
import "../styles/ThoughtHeart.css"

export const ThoughtHeart = ({ thoughtId, onLike, liked }) => {
  // 'liked' keeps track of whether the user has liked this specific thought.
  const [isliked, setIsLiked] = useState(liked)

  useEffect(() => {
    if (isliked !== liked) {
      setIsLiked(liked) // Sync the internal state with the passed `liked` prop
    }
  }, [liked, isliked])


  const handleLike = async () => {
    // Function to handle the like action when the heart is clicked.
    const URL = `https://project-happy-thoughts-api-42bh.onrender.com/thoughts/${thoughtId}/like` //URL, like API endpoint. From backend Happy Thoughts API

    try {
      // Send a POST request to like the thought.
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
      })

      if (response.ok) {
        // If the request is successful:
        onLike(thoughtId) // Call the parent/ThoughtList to update the hearts like count.
        setIsLiked(true) // Update the 'liked' state to reflect the like action.
      } else {
        console.error("Failed to like the thought")
      }
    } catch (error) {
      console.error("Error liking thought: ", error)
    }
  }

  // The heart icon which represents the like button.
  return (
    <span
      className={`heart-count ${isliked ? "liked" : ''}`}
      onClick={handleLike}
      style={{ cursor: "pointer" }}>
      ❤️ {/* Heart symbol for the like button */}
    </span>
  )
}
