import moment from "moment"
import PropTypes from "prop-types"
import { useState } from "react"

export const Feed = ({ thoughts, fetchHappyThoughts }) => {
  const [likes, setLikes] = useState({})
  const [likedThoughts, setLikedThoughts] = useState([])

  const onLikeIncrease = (_id) => {
    // Send a request to the API to increase the hearts for the post with that ID
    fetch(
      `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${_id}/like`,
      { method: "POST" }
    )
      .then((response) => response.json())
      .then((data) => {
        //Update the local state to reflect the new like count
        setLikes((prevLikes) => ({
          ...prevLikes,
          [_id]: data.hearts,
        }))
        setLikedThoughts((prevLikedThoughts) => [...prevLikedThoughts, _id])
        fetchHappyThoughts()
      })
      .catch((error) => {
        console.error("Error increasing like:", error)
      })
  }

  const isThoughtLiked = (_id) => {
    return likedThoughts.includes(_id)
  }

  return (
    <div className="feed-container">
      {thoughts.map((thought) => (
        <div key={thought._id} className="message">
          <p className="thought-text">{thought.message}</p>
          <div className="hearts-time-container">
            <p className="like-count">
              <button
                className={
                  "like-btn" + (isThoughtLiked(thought._id) ? " liked" : "")
                }
                onClick={() => onLikeIncrease(thought._id)}>
                ❤️
              </button>{" "}
              x{" "}
              {likes[thought._id] !== undefined
                ? likes[thought._id]
                : thought.hearts}
            </p>
            <p className="thought-time">
              {moment(thought.createdAt).fromNow()}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

Feed.propTypes = {
  thoughts: PropTypes.array.isRequired,
  fetchHappyThoughts: PropTypes.func.isRequired,
}
