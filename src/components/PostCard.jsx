import { useState } from "react"

export const PostCard = ({_id, message, hearts, timeSinceCreated, apiUrl, likesPerClick, setLikesPerClick }) => {
  const [likeCount, setLikeCount] = useState (hearts)
  
  
  const handleLike = () => {  
    const numLikes = likesPerClick //Props to handle how many times we POST per click on like button

    for (let i = 0; i < numLikes; i++) { // for loop
      fetch(`${apiUrl}/${_id}/like`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to like thought');
          }
          console.log('Liked thought successfully');
          // Increment like count locally for each successful request
          setLikeCount(prevCount => prevCount + 1);
        })
        .catch(error => {
          console.error('Error liking thought:', error);
        });
    }
  }

  return (
    <div className="card" key={_id}>
      <h2 className="card-message">{message}</h2>
      <div className="heart-and-time">
        <div className="heart-and-likes">
          <button className="heart" onClick={handleLike}>🧡</button>
          <h3>x {likeCount}</h3>
        </div>
        <h3 className="created-at">{timeSinceCreated}</h3>
      </div>
    </div>
  )
}
