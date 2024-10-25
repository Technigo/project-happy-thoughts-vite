import "./likeButton.css"
import { useState } from "react"

export const LikeButton = ({ thoughtId, hearts, onLike }) => {
    const [isClicked, setIsClicked] = useState(false)

    const handleClick = async () => {
        console.log("button clicked")
        await onLike(thoughtId)
        setIsClicked(true)
    }


    return (
        <>
            <button
                className={`like-button ${isClicked ? 'clicked' : ''}`}
                onClick={handleClick} >
                ❤️
            </button>
            <span className="counter">x {hearts}</span>
        </>
    )
}