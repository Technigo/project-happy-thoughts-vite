/* eslint-disable react/prop-types */
import { useState, useEffect } from "react"
import "../styles/ThoughtHeart.css"

export const ThoughtHeart = ({ thoughtId, onLike }) => {
  // 'liked' keeps track of whether the user has liked this specific thought.
  const [liked, setLiked] = useState(false)

  useEffect(() => {
    // useEffect runs after the component is mounted and checks if the thought was previously liked.
    const likedThoughts = JSON.parse(localStorage.getItem('likedThoughts')) || [] // Retrieve the list of previously liked thoughts from localStorage.
    if (likedThoughts.includes(thoughtId)) { // If the current thoughtId is already in localStorage, mark it as liked.
      setLiked(true) // Set 'liked' to true if this thought was already liked.
    }
  }, [thoughtId]) // Dependency array ensures this runs only when the component loads or thoughtId changes.

  const handleLike = async () => {
    // Function to handle the like action when the heart is clicked.
    const URL = `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thoughtId}/like`  // Define the URL for the like API endpoint.

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
        setLiked(true) // Update the 'liked' state to reflect the like action.
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
      className={`heart-count ${liked ? "liked" : ''}`}
      onClick={handleLike}
      style={{ cursor: "pointer" }}>
      ❤️ {/* Heart symbol for the like button */}
    </span>
  )
}
