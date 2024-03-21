import PropTypes from "prop-types"

export const Feed = ({ thoughts }) => {
  return (
    <div className="feed-container">
      {thoughts.map((thought) => (
        <div key={thought._id} className="message">
          <p className="tought-text">{thought.message}</p>
          <div className="hearts-time-container">
            <button className="like-btn">{thought.hearts}</button>
            <p className="tought-time">{thought.createdAt}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

Feed.propTypes = {
  thoughts: PropTypes.array.isRequired,
}
