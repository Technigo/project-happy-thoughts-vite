import { useState } from 'react'

export const HappyThought = ({ message, id }) => {
const [likeMessage, setLikeMessage] = useState(0)

const handleLike = () => {
    fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${id}/like`, {
        method: 'post',
    })
    .then(res => res.json)
    setLikeMessage(count => count + 1)
    console.log('Liked!')
}

    return (
        <div id="thought-container">
            <p>{message}</p>
            <div className="like-counter">
            <button 
                className="like-button"
                onClick={handleLike}><img src="like-heart.png" />
            </button>
            <div className="counter">
                x{likeMessage}
            </div>
            </div>
        </div>
    )
}

// API for liking a post `POST <https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/THOUGHT_ID/like`>.
// Replace "THOUGHT_ID" with relevant _id parameter