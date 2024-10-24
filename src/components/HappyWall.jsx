/* eslint-disable react/prop-types */

/**
 * This component is used to show the users' posted Happy thoughts on a wall, a feed.  
 */

import { useEffect, useState } from "react"

const BASE_URL = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts"

const HappyWall = () => {
  const [happyPosts, setHappyPosts] = useState([])
  
  useEffect(() => {
    const fetchHappyPosts = async () => {
      try {
        const response = await fetch(BASE_URL) /* Fetch from API */
        const fetchedHappyPosts = await response.json() /* Convert API response to JSON */
        setHappyPosts(fetchedHappyPosts)
      } catch (error) {
        console.log("Error fetching Happy thoughts:", error)
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
      <div className="posts-container">
        {happyPosts.map((post) => (
          <div key={post._id} className="post-box">
            <p className="post-text">{post.message}</p>
            <button
              className={`like-button ${post.hearts === 0 ? 'notLikedClass' : 'likedClass'}`}
              onClick={() => addLike(post._id)}
            >
              ❤️ {post.hearts}
            </button>
        </div>
        ))}
      </div>
    </div>
  )
}
export default HappyWall
/**
* Summary:
 * This component...
*/