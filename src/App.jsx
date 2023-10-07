//Imports
import React, { useState, useEffect } from 'react'

import { Form } from './components/Form'
import { Createthought } from './components/Createthought'

//Export. State variables are declared using 'useState' hook
export const App = () => {
  /*Array holding the list of posts fetched from API*/
  const [posts, setPosts] = useState([])
  /*String representing the content of a new post*/
  const [newPost, setNewPost] = useState("")
  /*Boolean indicating whether data is currently being fetched, set to true to start*/
  const [loading, setLoading] = useState(true)
  /*Variable to store any error that may occur during data fetching*/
  const [error, setError] = useState(null)

  //API variable is declared and assigned the URL of the API endpoint (from which the posts will be fetched)
  const API = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts"

  //Asynchronous function to fetch data from the specified API endpoint. Using try/catch to handle errors that might occur during the fetch
  const fetchPosts = async () => {
    try {
      const response = await fetch(API)

      if (!response.ok) {
        throw new Error('Oups, failure when trying to fetch data')
      }

      //If response is succesful. Parses the JSON data and sets the 'posts' state variable with the fetched data.
      const posts = await response.json()
      setPosts(posts)
      setLoading(false)
    } catch (error) {
      console.error('Error when trying to fetch data:', error)
      setError(error)
      setLoading(false)
    }
  }

  //useEffect hook used to perform side effects in components. Sets up to run when component mounts (empty array). Calls fetchPosts to load data when component is initially rendered.
  useEffect(() => {
    fetchPosts()

    //Sets up a repeating interval to call new posts every 5 seconds.
    const intervalId = setInterval(fetchPosts, 5000)

    //Cleanup and clears interval when component unmounts.
    return () => {
      clearInterval(intervalId)
    }
  }, [])

  //Conditional statements checking the loading and error states.
  if (loading) {
    return <div>Loading happy thoughts...</div>
  }
  if (error) {
    return <div>Error: {error.message}</div>
  }

  //Function for new post. Takes newPost as a parameter. setPosts state updates function to update posts state.
  const addNewPost = (newPost) => {
    setPosts([newPost, ...posts])
  }

  //Main part of component's rendering. Renders 'Create' component, passing props for adding new posts. Maps over 'Posts' array. Each Post component receives the post data as a prop. Key is assigned based on post's id to update React's UI.
  return (
    <div className="main-wrapper">
      <h1 className="gradient-text">Project Happy Thoughts</h1>
      <h3>Project by: Idah Collin</h3>
      <Createthought
        addNewPost={addNewPost}
        fetchPosts={fetchPosts}
        newPost={newPost}
        setNewPost={setNewPost}
      />
      <div>
        {posts.map((post) => (
          <Form post={post} key={post._id} />
        ))}

      </div>
    </div>
  )
};
