//Import
import "./likeButton.css"
import React, { useState, useEffect } from 'react'

//Export. Takes two props, 'id' and 'hearts' which are destructured from the props object.
export const LikeButton = ({ id, hearts }) => {
    //useState hook with current number of likes
    const [heart, setHeart] = useState(hearts)
    const [loading, setLoading] = useState(false)
    //UseState to change color of heart when clicked
    const [clicked, setClicked] = useState(false);
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
                        throw new Error(`There's a HTTP error! Status: ${response.status}`)
                    }
                    //If response from server is ok: parses JSON response data, updates likes/heart, sets loading to false to indicate that it's completed.
                    const data = await response.json()
                    setHeart(data.hearts)
                    setLoading(false)
                    setClicked(true) //Sets the clicked state to true when the button is clicked
                } catch (error) {
                    console.error('Hm, error when liking post:', error)
                    setLoading(false)
                }
            })()
        }
    }, [loading, id])


    //Function that sets loading state to true. Triggered when user clicks heart button to like post.
    const handleHeartSubmit = () => {
        setLoading(true)
    }

    //Returns/shows like button + when clicked
    return (
        <div>
            <button className={`like-button ${clicked ? 'clicked' : ''}`}
                onClick={handleHeartSubmit}>
                ❤️</button> x {heart}
        </div>
    )
}