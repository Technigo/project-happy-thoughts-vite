import PropTypes from "prop-types"

export const Feed = ({ thoughts }) => {
  return (
    <div className="feed-container">
      {thoughts.map((thought) => (
        <div key={thought._id} className="message">
          {thought.message}
        </div>
      ))}
    </div>
  )
}

Feed.propTypes = {
  thoughts: PropTypes.array.isRequired,
}
