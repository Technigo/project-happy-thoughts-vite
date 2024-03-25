import { formatDistanceToNow } from "date-fns"


import PropTypes from "prop-types"

export const TimeStamp = ({ time }) => {
    const writeTime = formatDistanceToNow(new Date(time), {
      addSuffix: true,
    })
    
  return (
    <div className="time-box">
      <p className="time-stamp">{writeTime}</p>
    </div>
  )
}

TimeStamp.propTypes = {
  time: PropTypes.string,
}