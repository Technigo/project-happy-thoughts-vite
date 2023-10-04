import React, { useState, useEffect } from 'react'

import { Post } from './components/Post/Post'
import { Create } from './components/Create/Create'

export const App = () => {
  const [posts, setPosts] = useState([])
  const [newPost, setNewPost] = useState("")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  
  

  const API = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts"

  //useEffect runs when the component mounts (using empty array []). This effect fetches data from the API endpoint.
  
    const fetchPosts = async () => {
      try {
        const response = await fetch(API)

        if(!response.ok) {
          throw new Error('Failed to fetch data')
        }

        const posts = await response.json() //parse the response as JSON
        setPosts(posts) //Update the state with fetched posts
        setLoading(false) //Set loading to false as data fetcing is complete
      } catch (error) {
        console.error ('Error fetching data:', error)
        setError(error)
        setLoading(false)
      }
    }

    useEffect(()=> {
      fetchPosts() //Initial data fetch when the component is mounted

      const intervalId = setInterval(fetchPosts, 5000) // Set up an interval to periodically fetch data every 5 seconds

      return () => {
        clearInterval(intervalId) //Clean up the interval when the component unmounts
      }
    }, []) //UseEffect depends on an empty array, so runs only once

        //Rendering Loading/error messages: 
  if(loading){
    return<div>Loading...</div>
  }
  if(error){
    return <div>Error: {error.message}</div>
  }
  //Declaring a function to update 'posts' state with a new post
  const addNewPost = (newPost) => {
    //Updating 'posts' state by adding 'newPost' at the beginning of the array: 
    setPosts([newPost, ...posts])
  }

  

  return (
    <div className="main-section">
            <Create 
              addNewPost={addNewPost}
              fetchPosts={fetchPosts}
              newPost ={newPost}
              setNewPost ={setNewPost}
              />
            <ul> {/*Rendering all the posts with a map() */}
              {posts.map((post) => (
                <Post post={post} key={post._id}/>
              )) }
              
            </ul>
        </div>
  )
};
