import PropTypes from 'prop-types'

export const PreviousThoughts = ({ thoughts }) => {
  return (
    <div className="thought-feed">
      {thoughts.map((message, index) => (
        <div className="each-thought" key={index}>
          <div id="unique-message">{message.message}</div>
          <div id="likes"><div id="heart">❤️</div>
          <div id="amount">x{message.hearts}</div></div>
          <div id="time">time</div>
        </div>
      ))}
    </div>
  )
}

PreviousThoughts.propTypes = {
  thoughts: PropTypes.array.isRequired,
}
