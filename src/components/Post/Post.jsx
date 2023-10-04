import "./post.css"

import React, {useState} from 'react'
export const Post = ({post}) => {
     const { _id, message, hearts } = post //destructuring the post object
    
     const [heart, setHeart] = useState(0) //state for handling likes

     const handleHeartSubmit = async() => {
        console.log("like")
        setHeart(heart + 1)

        const messageId = {_id}
        console.log(_id)
        const likeAPI = `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${_id}/like`

        await fetch(likeAPI
            ,{ 
          method: "POST",
          headers: {"Content-Type": "application/json"}, //Informing the server that JSON data is sent
            }
        )
            .then((response) => response.json())
            .then ((data)=>{
                console.log(data)
            })

     }

     return(
         <div className="post-section">
             <div className="message-section">
                 Message: {message}
             </div>
             <div className="heart-section">
                 Number of hearts: {hearts}
             </div>
             <div>
                <button onClick = {handleHeartSubmit}>❤️</button> x {hearts}
             </div>
             <div>{_id}</div>
         </div>
     )
}