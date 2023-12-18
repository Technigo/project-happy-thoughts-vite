import moment from 'moment'
import "./post.css"

import { HeartBtn } from "../Button/HeartBtn"

import React from 'react'
export const Post = ({post}) => {
     const { _id, message, hearts, createdAt } = post //destructuring the post 
     

     return(
         <div className="post-wrapper">
            <div>
             <p>{message}</p>
             </div>
             <div className="heart-time">
                <HeartBtn id={_id} hearts={hearts}/>
                {moment(createdAt).fromNow()}
             </div>
         </div>
     )
}