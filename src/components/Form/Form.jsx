//Imports
import "./form.css"

import { LikeButton } from "../Buttonlike/LikeButton"

import React from 'react'

//Export. Takes the prop post (passed from the parent component). Contains information about the post (message and number of likes that has been received)
export const Form = ({ post }) => {
    //post object is destructured to extract properties id, message and hearts
    const { _id, message, hearts } = post

    //Renders /shows message, heart button and how many likes
    return (
        <div className="post-wrapper">
            <div>
                {message}
            </div>
            <div>
                <LikeButton id={_id} hearts={hearts} />
            </div>
        </div>
    )
}
