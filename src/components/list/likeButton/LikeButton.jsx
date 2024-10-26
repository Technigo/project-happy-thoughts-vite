import "./likeButton.css"
import { useState } from "react"
import PropTypes from "prop-types"

export const LikeButton = ({ thoughtId, hearts, onLike }) => {
    const [isClicked, setIsClicked] = useState(false)

    const handleClick = async () => {
        const newClickedState = !isClicked
        setIsClicked(newClickedState)

        await onLike(thoughtId, newClickedState)
        // setIsClicked(true)
    }


    return (
        <>
            <button
                className={`like-button ${isClicked ? 'clicked' : ''}`}
                onClick={handleClick} >
                ❤️
            </button>
            <span className="counter">x {hearts + (isClicked ? 1 : 0)}</span>
        </>
    )
}

LikeButton.propTypes = {
    thoughtId: PropTypes.string.isRequired,
    hearts: PropTypes.number.isRequired,
    onLike: PropTypes.func.isRequired,
}