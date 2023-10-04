import "./post.css"
export const Post = ({post}) => {
     const { message, hearts } = post //destructuring the post object

     return(
         <div className="post-section">
             <div className="message-section">
                 Message: {message}
             </div>
             <div className="heart-section">
                 Number of hearts: {hearts}
             </div>
         </div>
     )
}