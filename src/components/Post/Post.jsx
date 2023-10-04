import "./post.css"

import { HeartBtn } from "../Button/HeartBtn"

import React from 'react'
export const Post = ({post}) => {
     const { _id, message, hearts } = post //destructuring the post object
    
     

     return(
         <div className="post-section">
             <div className="message-section">
                 {message}
             </div>
             
             <div>
                <HeartBtn id={_id} hearts={hearts}/>
                
             </div>
            
         </div>
     )
}