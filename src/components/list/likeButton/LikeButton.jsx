import "./likeButton.css"
import { useState } from "react"

export const LikeButton = () => {
    const [count, setCount] = useState(0)
    const [isClicked, setIsClicked] = useState(false)

    const handleClick = () => {
        setCount(prevCount => prevCount + 1)
        setIsClicked(true)
    }

    return (
        <>
            <button
                className={`like-button ${isClicked ? 'clicked' : ''}`}
                onClick={handleClick} >
                ❤️
            </button>
            <span className="counter">x {count}</span>
        </>
    )

}