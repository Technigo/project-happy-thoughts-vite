//Import
import "./likeButton.css"
import React, { useState, useEffect } from 'react'

//Export. Takes two props, 'id' and 'hearts' which are destructured from the props object.
export const LikeButton = ({ id, hearts }) => {
    //useState hook with current number of likes
    const [heart, setHeart] = useState(hearts)
    const [loading, setLoading] = useState(false)
    //Variable declared and constructed based on the prop 'id'
    const likeAPI = `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${id}/like`


    //useEffect to run when the props 'loading' or 'id' changes. 
    useEffect(() => {
        if (loading) {
            //Post request to the likeAPI endpoint, signaling that user wants to like the post with the specified id.
            (async () => {
                try {
                    const response = await fetch(likeAPI, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" }, //Informing the server that JSON data is sent
                    })
                    //Throws an error if response from server is not ok.
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`)
                    }
                    //If response from server is ok: parses JSON response data, updates likes/heart, sets loading to false to indicate that it's completed.
                    const data = await response.json()
                    setHeart(data.hearts)
                    setLoading(false)
                } catch (error) {
                    console.error('Error liking post:', error)
                    setLoading(false)
                }
            })()
        }
    }, [loading, id])


    //Function that sets loading state to true. Triggered when user clicks heart button to like post.
    const handleHeartSubmit = () => {
        setLoading(true)
    }

    //Returns/shows like button. Event handler which triggers operation by setting 'loading' to true.
    return (
        <div>
            <button onClick={handleHeartSubmit}>❤️</button> x {heart}
        </div>
    )
}