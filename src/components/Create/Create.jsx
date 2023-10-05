import "./create.css"
import React, { useState, useEffect } from 'react'

export const Create = ({
  addNewPost, 
  fetchPosts, 
  newPost, 
  setNewPost}) => {

    const [errorMessage, setErrorMessage] = useState("")  
    const postAPI = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts"
  
  //------------Rendering error message if message is too long!----
  useEffect(()=> {
    if(newPost.length >= 141) {
      setErrorMessage("Your message is too long!")
    } else {
      setErrorMessage("")//Clearing the error message if 'newPost' is not too long
    }
  }, [newPost]) //Dependency array includes 'newPost', so the effect runs when 'newPost' changes
  //----------------End of useEffect----------------

  //Function to handle form submission: 
  const handleFormSubmit = async(event) =>{
  //---------Beginning of async fetch---------------------
    try{
      event.preventDefault() //Preventing default behaviour

  //--------If/else to render error if message is too short---------
        if (newPost.length <= 5) {
        setErrorMessage("Your message is too short!")
        } else {
        //Creating a new message object (to be sent on to JSON later on)
        const newMessage = {message: `${newPost}`}
  //------------------------------------------------------------------
  
  //------sending POST request to the API endpoint to create new message-------
        const response = await fetch(postAPI
        ,{ 
          method: "POST",
          body: JSON.stringify(newMessage), // 'Body' contains the message to be sent to the server.
          headers: {"Content-Type": "application/json"}, //Informing the server that JSON data is sent
          })

          if(!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`) //is this working? Not rendering, so no point? 
          }
        const data = await response.json()
  //-------------------end of POST request---------------------
    
        addNewPost(data) //New post with message from data is rendered 
        setNewPost("")  //Resetting 'newPost' to an empty string, clearing the textarea
        fetchPosts()   //Calling the 'fetchPosts' function (passed as prop) ro re-fetch posts
        }
       
    } catch (error) {
      console.error("Error in handleFormSubmit:", error)
    }
  }
  //------end of async fetch-------------

  return (
    <div className="create-post-wrapper">
        <h2>What is making you happy right now?</h2>
        <form onSubmit={handleFormSubmit}>
            
            <textarea
              rows="3"
              placeholder="'Happiness depends upon ourselves.' - Aristotle"
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              required
            ></textarea>
            
              {/* Displaying the character count of `newPost`, applying a "red" class if length is 140 or more */}
              <div className="post-length">
              <p>{errorMessage}</p> 
              <p className={`length ${newPost.length >= 140 ? "red" : ""}`}>
              {newPost.length}/140
              </p>
              </div>
              <div>
              {/*Displaying error message */}
              </div>
            <div className="button-div">
            <button type="submit" id="submitPostBtn">
            ❤️Send Happy Thought❤️
            </button>
            </div>
        </form>
    </div>
  )
}