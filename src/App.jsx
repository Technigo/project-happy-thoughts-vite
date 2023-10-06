import React, { useState, useEffect } from 'react'

import { Post } from './components/Post/Post'
import { Create } from './components/Create/Create'

export const App = () => {
  const [posts, setPosts] = useState([])
  const [newPost, setNewPost] = useState("")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  
  const API = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts"
  
    const fetchPosts = async () => {
      try {
        const response = await fetch(API)

        if(!response.ok) {
          throw new Error('Failed to fetch data')
        }

        const posts = await response.json() //parse the response as JSON
        setPosts(posts) //Update the state with fetched posts
        setLoading(false) //Set loading to false as data fetching is complete
      } catch (error) {
        console.error ('Error fetching data:', error)
        setError(error)
        setLoading(false)
      }
    }

  //----------useEffect to initiate data fetch when component is mounted----------
    useEffect(()=> {
      fetchPosts() 
    }, []) //UseEffect depends on an empty array, so runs only once
  //------------------------------------------------------------------------

  //-----------Rendering Loading/error messages: ----------------
  if(loading){
    return (
      <div className="loader-wrapper">
    <div className="loader"></div>
    <div>Loading thoughts...</div>
    </div>)
  }
  if(error){
    return <div>Error: {error.message}</div>
  }
//-----------------------------------------------------------------


  //-----------Function to update posts-----------------------
  const addNewPost = (newPost) => {
    //Updating 'posts' state by adding 'newPost' at the beginning of the array: 
    setPosts([newPost, ...posts])
  }
  //----------------------------------------------------------

  
  return (
    <div className="main-section">
            <h1>Happy thoughts</h1>
            <Create 
              addNewPost={addNewPost}
              fetchPosts={fetchPosts}
              newPost ={newPost}
              setNewPost ={setNewPost}
              />
            <div> {/*Rendering all the posts with a map() */}
              {posts.map((post) => (
                <Post post={post} key={post._id}/>
              )) }
              
            </div>
    </div>
  )
};