import { useState } from "react"
import PropTypes from "prop-types"

import HeartRed from "../../assets/heart-red.png"
import HeartOutline from "../../assets/heart-outline.png"

export const Likes = ({ id, likes, fetchThoughts }) => {
  const [thoughtLiked, setThoughtLiked] = useState(false)
  const [likesToShow, setLikesToShow] = useState(likes)
  
  const postLike = () => {
    fetch(
      `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${id}/like`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((response) => response.json())
      .then(() => {
        setLikesToShow(likesToShow + 1)
        setThoughtLiked(!thoughtLiked)
        fetchThoughts()
      })
      .catch((error) => {
        console.log("error:", error)
      })
  }

  return (
    <div className="like-box">
      <button 
        className={thoughtLiked ? "like-button pink" : "like-button grey"} 
        onClick={postLike}
      >
        <img src={thoughtLiked ? HeartRed : HeartOutline} alt="Icon of a heart" className="heart"/>
      </button>
      <p className="like-text">x {likesToShow}</p>
    </div>
  )
}

Likes.propTypes = {
  id: PropTypes.string,
  likes: PropTypes.number,
  fetchThoughts: PropTypes.func,
}