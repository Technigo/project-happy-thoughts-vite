import moment from 'moment'
import "./post.css"

import { HeartBtn } from "../Button/HeartBtn"

import React from 'react'
export const Post = ({post}) => {
     const { _id, message, hearts, createdAt } = post //destructuring the post 
     
    //  console.log(_id)
     

     return(
         <div className={`post-wrapper${post[0]? "latest" : "" }`}>
             <p>{message}</p>
             <div className="heart-time">
                <HeartBtn id={_id} hearts={hearts}/>
                {moment(createdAt).fromNow()}
             </div>
         </div>
     )
}