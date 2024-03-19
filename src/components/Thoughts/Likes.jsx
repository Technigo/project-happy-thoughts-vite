import PropTypes from "prop-types"
import HeartRed from "../../assets/heart-red.png"

export const Likes = ({likes}) => {
  return (
    <div className="like-box">
        <img src={HeartRed} alt="Icon of a heart" className="heart"/>
        <p>{likes}</p>
    </div>
  )
}

Likes.propTypes = {
  likes: PropTypes.number,
}
