import moment from "moment"
import PropTypes from "prop-types"

export const Feed = ({ thoughts }) => {
  return (
    <div className="feed-container">
      {thoughts.map((thought) => (
        <div key={thought._id} className="message">
          <p className="thought-text">{thought.message}</p>
          <div className="hearts-time-container">
            <p className="like-count">
              <button className="like-btn">❤️</button> x {thought.hearts}
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
}
