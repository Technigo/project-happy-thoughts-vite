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

/*Like a thought:
`POST <https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/THOUGHT_ID/like`>
When the user clicks the heart button on a thought, send a POST request to this URL.*Replace THOUGHT_ID with the`_id`parameter of the thought the user clicked on*/