import "./create.css"
import React, { useState, useEffect } from 'react'

export const Create = ({
  addNewPost, 
  fetchPosts, 
  newPost, 
  setNewPost}) => {

    const [errorMessage, setErrorMessage] = useState("")
  
  useEffect(()=> {
    //Checking if the length of the "newPost" is 141 or more charachters
    if(newPost.length <= 141) {
      setErrorMessage("Your message is too long")
    } else {
      //Clearing the error message if 'newPost' is not too long: 
      setErrorMessage("")
    }
  }, [newPost]) //Dependency array includes 'newPost', so the effect runs when 'newPost' changes

  //Function to handle form submission: 
  const handleFormSubmit = async(event) =>{
    //Preventing default behaviour
    event.preventDefault()
    //Logging the current 'newPost' to the console: 
    console.log("newPost onformSubmit:", newPost)


    if (newPost.length <= 5) {
      setErrorMessage("Your message is too short!")
    } else {
      //Declaring 'options' object to configure the fetch request
      const options = {
        method: "POST",
        body: JSON.stringify({
          message: `${newPost}`,
        }), 
        headers: {"Content-Type": "applications/json"}, 
      }
  
      //Making POST request to the API endpoint with the 'options' object
      await fetch(
        "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts",
        options
      )
        .then((response) => response.json()) //Parsing the response as JSON
        .then ((data) => {
          //calling 'addNewPost' function (passed as prop) with the parsed data
          addNewPost(data)
          //Resetting 'newPost' to an empty string, clearing the textarea
          setNewPost("")
          //Calling the 'fetchPosts' function (passed as prop) ro re-fetch posts
          fetchPosts()
        })
        .catch((error)=> console.log(error))
    }
  }

  return (
    <div className="create-post">
        <h3>What makes you happy?</h3>
        <form onSubmit={handleFormSubmit}>
            <label>Write here:</label>
            <textarea
              rows="5"
              cols="50"
              placeholder="Write your message here..."
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              required
            ></textarea>
            <div>
              {/*Displaying error message */}
              <p>{errorMessage}</p>
              {/* Displaying the character count of `newPost`, applying a "red" class if length is 140 or more */}
              <p className={`length ${newPost.length >= 140 ? "red" : ""}`}>
              {newPost.length}/140
              </p>
            </div>
            <button type="submit" id="submitPostBtn">
              Send love❤️
            </button>
        </form>
    </div>
  )
}
