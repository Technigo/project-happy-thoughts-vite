import "./create.css"
import React, { useState, useEffect } from 'react'

export const Create = ({
  addNewPost, 
  fetchPosts, 
  newPost, 
  setNewPost}) => {

    const [errorMessage, setErrorMessage] = useState("") //Why can't i send this down as a prop from App.jsx? 
  
  useEffect(()=> {
    //Checking if the length of the "newPost" is 141 or more charachters
    if(newPost.length >= 141) {
      setErrorMessage("Your message is too long")
    } else {
      //Clearing the error message if 'newPost' is not too long: 
      setErrorMessage("")
    }
  }, [newPost]) //Dependency array includes 'newPost', so the effect runs when 'newPost' changes

  //Function to handle form submission: 
  const handleFormSubmit = async(event) =>{
    try{
      event.preventDefault() //Preventing default behaviour
    
      const postAPI = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts"

        if (newPost.length <= 5) {
        setErrorMessage("Your message is too short!")
        } else {
        //Declaring 'options' object to configure the fetch request
        const newMessage = {message: `${newPost}`}
  
        //Making POST request to the API endpoint with the 'options' object
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
        console.log(data)
      
        //calling 'addNewPost' function (passed as prop) with the parsed data
        addNewPost(data)
        //Resetting 'newPost' to an empty string, clearing the textarea
        setNewPost("")
        //Calling the 'fetchPosts' function (passed as prop) ro re-fetch posts
        fetchPosts()
        }

       
    } catch (error) {
      console.error("Error in handleFormSubmit:", error)
    }
  }

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
              <p className={`length ${newPost.length >= 140 ? "red" : ""}`}>
              {newPost.length}/140
              </p>
              </div>
              <div>
              <p>{errorMessage}</p> {/*Displaying error message */}
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
