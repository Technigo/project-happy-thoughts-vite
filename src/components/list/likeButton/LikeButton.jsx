import "./likeButton.css"
import { useState, useEffect } from "react"
import PropTypes from "prop-types"

export const LikeButton = ({ thoughtId, hearts, onLike }) => {
  const [isClicked, setIsClicked] = useState(false)
  useEffect(() => {
    const likedThoughts = JSON.parse(localStorage.getItem("likedThoughts")) || []
    if (likedThoughts.includes(thoughtId)) {
      setIsClicked(true)
    }
  }, [thoughtId])

  const handleClick = async () => {
    const newClickedState = !isClicked
    setIsClicked(newClickedState)
    const likedThoughts = JSON.parse(localStorage.getItem("LikedThoughts")) || []
    if (newClickedState) {
      localStorage.setItem("likeThoughts", JSON.stringify([...likedThoughts, thoughtId]))
    } else {
      localStorage.setItem("likedThoughts", JSON.stringify(likedThoughts.filter(id => id !== thoughtId)))
    }
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
      <span className="counter">x {hearts}</span>
    </>
  )
}

LikeButton.propTypes = {
  thoughtId: PropTypes.string.isRequired,
  hearts: PropTypes.number.isRequired,
  onLike: PropTypes.func.isRequired,
}