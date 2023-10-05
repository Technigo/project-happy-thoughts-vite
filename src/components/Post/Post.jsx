import "./post.css"

import { HeartBtn } from "../Button/HeartBtn"

import React from 'react'
export const Post = ({post}) => {
     const { _id, message, hearts } = post //destructuring the post object
    
     

     return(
         <div className="post-wrapper">
             <p>{message}</p>
             <div>
                <HeartBtn id={_id} hearts={hearts}/>
             </div>
         </div>
     )
}