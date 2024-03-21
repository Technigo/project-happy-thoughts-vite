import { useState } from "react"
import PropTypes from "prop-types"

import HeartRed from "../../assets/heart-red.png"

export const Likes = ({ id, likes, fetchThoughts }) => {
  //const [newLike, setNewLike] = useState(false)
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
      .then((json) => {
        console.log(json)
        setLikesToShow(likesToShow + 1)
        fetchThoughts()
      })
      .catch((error) => {
        console.log("error:", error)
      })
  }

  return (
    <div className="like-box">
      <button className="like-button" onClick={postLike}>
        <img src={HeartRed} alt="Icon of a heart" className="heart"/>
      </button>
      <p>x {likesToShow}</p>
    </div>
  )
}

Likes.propTypes = {
  id: PropTypes.string,
  likes: PropTypes.number,
  fetchThoughts: PropTypes.func,
}