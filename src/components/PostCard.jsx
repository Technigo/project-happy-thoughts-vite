import { useState } from "react"

export const PostCard = ({_id, message, hearts, timeSinceCreated }) => {
  const [likeCount, setLikeCount] = useState (hearts)

  
  const handleLike = () => {
    setLikeCount(likeCount + 1); // Increment like count locally

    // Send POST request to update like count in the API
    fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${_id}/like`, {
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
      })
      .catch(error => {
        console.error('Error liking thought:', error);
        setLikeCount(likeCount);
    });
  }

  return (
    <div className="card" key={_id}>
      <h2 className="card-message">{message}</h2>
      <div className="heart-and-time">
        <div className="heart-and-likes">
          <button className="heart" onClick={handleLike}>🧡</button>
          <h3>x  {hearts}</h3> 
        </div>
        <h3 className="created-at">{timeSinceCreated}</h3>
      </div>
    </div>
  )
}
