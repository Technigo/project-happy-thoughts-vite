/* eslint-disable react/prop-types */

/**
 * This component is used to show the users' posted Happy thoughts on a wall, a feed by using API. The post contains a like button, displays number of likes and has a time stamp.  
 */

import { useEffect, useState } from "react"
import { BASE_URL } from "./BASE_URL"
import Loader from "./Loader" 

const HappyWall = () => {
  const [happyPosts, setHappyPosts] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    const fetchHappyPosts = async () => {
      try {
        const response = await fetch(BASE_URL) /* Fetch from API */
        const fetchedHappyPosts = await response.json() /* Convert API response to JSON */
        setHappyPosts(fetchedHappyPosts)
      } catch (error) {
        console.log("Error fetching Happy thoughts:", error)
      } finally {
        setTimeout(() => {
          setLoading(false) /* Stop loading when posts are fetched after the delay. */
        }, 2000) // 2 seconds delay to show loading message
      }
    }

    fetchHappyPosts()
  }, []) /* Empty array to make side effect run once and avoid looping */

  // Function to handle "liking" a post
  const addLike = async (postId) => {
    try {
      fetch(`${BASE_URL}/${postId}/like`, { method: "POST" })

      // Update the state with a like
      setHappyPosts((prevPosts) =>
        prevPosts.map((post) =>
          post._id === postId ? { ...post, hearts: post.hearts + 1 } : post
        )
      )
    } catch (error) {
      console.error("Error liking the post:", error)
    }
  }

  return (
    <div className="wall-form">
      <h3>Happy Wall</h3>
      <p>Here you can read and like posted thoughts!</p>
      {loading ? //Is it loading? If true > Loader component 
        (<Loader />) 
        : // "otherwise"
        (<div className="posts-container"> {/* Show posts */}
          {happyPosts.map((post) => (
            <div key={post._id} className="post-box">
              <p className="post-text">{post.message}
              </p>
              <div className="post-info">
                <div className="like-container">
                  <button
                    aria-label={`Like post with message: ${post.message}`}
                    className={`like-button ${post.hearts === 0 ? 'notLikedClass' : 'likedClass'}`}
                    onClick={() => addLike(post._id)}
                  >
                    <span className="heart-icon" aria-label="Like icon">❤️</span> {/* Target heart icon */}
                  </button>
                  <span className="like-count" aria-label="Number of likes"> x {post.hearts}</span> {/* Display likes outside the button */}
                </div>
                <p className="post-timestamp">
                  {/* undefined to present date/time in the user's location e.g. 24 hour clock vs AM/PM*/}
                  Posted at: {new Date(post.createdAt).toLocaleString(undefined, {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                  {/* Format: YYYY, MM, DD, HH, MM */}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
export default HappyWall
/**
 * Summary:
 * The HappyWall component is fetching and displaying a list of happy thoughts from an API. 
 * Each post contains the posted message, a like button, and displays the number of likes. 
 * The component also shows the timestamp of when each post was created.
 * 
 * The component uses:
 * - useEffect to fetch the happy thoughts from the API when the component is first rendered.
 * - useState to manage the list of posts (happyPosts).
 * - A like button to allow users to like a post, with the number of likes.
 * - Timestamps are formatted to show the date and time in  a specific format based on the user's locale.
 * - Accessibility enhancements include `aria-label` for both the like button and the like count.
 */
