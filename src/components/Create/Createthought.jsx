//Imports
import "./createthought.css"
import React, { useState, useEffect } from 'react'

//Export of Crate and props
export const Createthought = ({
    addNewPost,
    fetchPosts,
    newPost,
    setNewPost }) => {

    //Error message using useState hook. Will be used to display error message to the user.
    const [errorMessage, setErrorMessage] = useState("")

    //This useEffects runs when the newPost prop changes. Checking if length is 141 characters or more.
    useEffect(() => {
        if (newPost.length >= 141) {
            setErrorMessage("Your message is too long")
        } else {
            setErrorMessage("")
        }
    }, [newPost])

    //Function to handle form submission when user submits form.
    const handleFormSubmit = async (event) => {
        try {
            event.preventDefault()

            const postAPI = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts"
            //Checks if newPost content is less than or equal to 5 characters, sets error message if it is. Otherwise proceeds to make a POST request to specified API endpoint.
            if (newPost.length <= 5) {
                setErrorMessage("Your message is too short!")
            } else {
                //Creates a newMessage object with message content from newPost.
                const newMessage = { message: `${newPost}` }

                //Uses fetch API to send a POST request to server with the JSON data.
                const response = await fetch(postAPI
                    , {
                        method: "POST",
                        body: JSON.stringify(newMessage),
                        headers: { "Content-Type": "application/json" },

                    })
                //If response is not ok, it throws an error.
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`)
                }
                //If response is ok. Calls addNewPost function (prop) to add new post to list of posts, clears newPost input field and fetches the latest post.
                const data = await response.json()

                addNewPost(data)
                setNewPost("")
                fetchPosts()
            }


        } catch (error) {
            console.error("Error in handleFormSubmit:", error)
        }
    }

    //Returns JSX structure representing the form for creating new posts. 
    return (
        <div className="top-post-wrapper">
            <h2>What is making you happy right now?</h2>
            <form onSubmit={handleFormSubmit}>

                <textarea
                    placeholder="Life is like a mirror. Smile at it, and it smiles back at you. - Peace Pilgrim"
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                    rows="3"
                    required
                ></textarea>
                <button type="submit">❤️ Send Happy Thought ❤️</button>
            </form>
        </div>
    )
}
