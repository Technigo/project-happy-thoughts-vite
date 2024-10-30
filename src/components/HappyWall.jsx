/* eslint-disable react/prop-types */

/**
 * This component is used to show the users' posted Happy thoughts on a wall, a feed by using API. 
 * The component uses useEffect to fetch the happy thoughts from the API when the component is first rendered. 
 * The component uses useState to manage the list of posts (happyPosts) and loading state (loading) when updating the wall. 
 * The posts are displayed by using the PostList component, and while loading the posts, the Loader component is shown.
 */

import { useEffect, useState } from "react"
import { BASE_URL } from "./BASE_URL"
import Loader from "./Loader" 
import PostList from "./Postlist"

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
        (<PostList happyPosts={happyPosts} addLike={addLike} />)
      }
    </div>
  )
}
export default HappyWall
/**
 * Summary:
 * The HappyWall component is fetching and displaying a list of happy thoughts from an API. 
 * Each post contains the posted message, a like button, and displays the number of likes, displayed using the PostList component. 
 * 
 * The component uses:
 * - useEffect to fetch the happy thoughts from the API when the component is first rendered.
 * - useState to manage the list of posts (happyPosts).
 */
