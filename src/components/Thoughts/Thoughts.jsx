import PropTypes from "prop-types"
import { Likes } from "./Likes"
import { TimeStamp } from "./TimeStamp"

export const Thoughts = ({ id, message, likes, time, fetchThoughts }) => {
  return (
    <div className="thought-box">
      <p className="message">{message}</p>
      <div className="beneath-message">
        <Likes id={id} likes={likes} fetchThoughts={fetchThoughts}/>
        <TimeStamp time={time}/>
      </div>   
    </div>
    )
}

Thoughts.propTypes = {
  id: PropTypes.string,
  message: PropTypes.string,
  likes: PropTypes.number,
  time: PropTypes.string,
  fetchThoughts: PropTypes.func,
}
