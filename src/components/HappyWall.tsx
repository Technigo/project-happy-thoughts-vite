/**
 * HappyWall Component
 * 
 * This component serves as the main container for displaying and managing Happy Thoughts posted by users. 
 * It fetches, displays, and updates posts, allowing users to like and submit new thoughts.
 * 
 * Key Features:
 * - **Fetching and Displaying Posts:**
 *   - The `fetchHappyPosts` function retrieves thoughts from the API via a GET request and updates the `happyPosts` state.
 *   - Posts are displayed using the `PostList` component, while a `Loader` component is shown during data fetching.
 * 
 * - **Submitting New Posts:**
 *   - Includes the `HappyBoard` component, a form for users to submit new thoughts.
 *   - Passes the `fetchHappyPosts` function as a prop to `HappyBoard` to refresh the wall after a successful submission.
 * 
 * - **Liking Posts:**
 *   - The `addLike` function sends a POST request to the API to like a post.
 *   - Updates the local `happyPosts` state with the new like count.
 * 
 * * Hooks:
 * - `useState` manages the `happyPosts` and `loading` states.
 * - `useEffect` triggers the initial fetch of posts when the component mounts.
 * 
 * TypeScript Integration:
 * - **Interface `HappyPost`:** Defines the structure of a thought (message, _id, hearts, createdAt).
 * - **State Typing:**
 *   - `happyPosts`: Typed as an array of `HappyPost` objects.
 *   - `loading`: Typed as a boolean to track the loading state.
 * - **Function Typing:**
 *   - `fetchHappyPosts`: Handles API requests and has an inferred return type of `Promise<void>`.
 *   - `addLike`: Accepts a `number` (postId) and returns `void`.
 */

import { useEffect, useState } from "react"
import { BASE_URL } from "./BASE_URL"
import Loader from "./Loader"
import PostList from "./PostList"
import HappyBoard from "./HappyBoard"

// TypeScript: Define the structure of a HappyPost object using an interface.
interface HappyPost {
  message: string,
  _id: number,
  hearts: number,
  createdAt: string;
}

const HappyWall = () => {
  // TypeScript: Define the state for happyPosts as an array of HappyPost objects, see interface above. 
  const [happyPosts, setHappyPosts] = useState<HappyPost[]>([])
 // TypeScript: Define the state for loading as a boolean (true/false).
  const [loading, setLoading] = useState<boolean>(true)
  
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
  //TypeScript: define that postId is a number
  const addLike = async (postId: number) => {
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

