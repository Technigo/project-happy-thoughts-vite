/* eslint-disable react/prop-types */

/**
 *  HappyWall Component
 * 
 * This component is used to show the users' posted Happy thoughts on a wall. 
 * 
 * - `HappyWall` fetches and displays happy thoughts from an API when the component is first rendered.
 * - The `fetchHappyPosts` function uses useEffect and sends a GET request to the API, retrieves the latest thoughts, and updates the `happyPosts` state.
 *  - The posts are displayed by using the PostList component, and while loading the posts, the Loader component is shown.
 * - `HappyBoard` component is a form for users to submit new thoughts. This component is nested within `HappyWall`, passes `fetchHappyPosts` as a prop, allowing it to trigger a refresh after a new thought is posted.
 * - The component uses useState to manage the list of posts (happyPosts), loading state (loading) when updating the wall and to update the wall with new posts (refresh).   
 * - The hook `useEffect` calls `fetchHappyPosts` once when the component mounts. 
 * 
 */

import { useEffect, useState } from "react"
import { BASE_URL } from "./BASE_URL"
import Loader from "./Loader"
import PostList from "./PostList"
import HappyBoard from "./HappyBoard"

const HappyWall = () => {
  const [happyPosts, setHappyPosts] = useState([])
  const [loading, setLoading] = useState(true)
  
  // Function to fetch all posts
  const fetchHappyPosts = async () => {
    setLoading(true);
    try {
      const response = await fetch(BASE_URL) /* Fetch from API */
      const fetchedHappyPosts = await response.json() /* Convert API response to JSON */
      setHappyPosts(fetchedHappyPosts)
      } catch (error) {
        console.log("Error fetching Happy thoughts:", error)
      } finally {
        setTimeout(() => {
          setLoading(false) /* Stop loading when posts are fetched after the delay. The delay is to better show the Loading state */
        }, 2000) // 2 seconds delay to show loading message
      }
    }

    useEffect(() => {
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

  console.log("fetchHappyPosts is:", fetchHappyPosts)

  return (
    <div className="wall-form">
      <HappyBoard updateFormData={fetchHappyPosts} />
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

