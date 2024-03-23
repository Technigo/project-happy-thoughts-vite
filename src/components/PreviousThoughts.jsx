import PropTypes from 'prop-types'
import {LikeThought} from './LikeThought'
import { formatDistance } from 'date-fns'

//Maps over each previous message and displays its text, amount of hearts and time ago it was created
export const PreviousThoughts = ({ thoughts, setMessageUpdate, messageUpdate}) => {
   
  return (
    <div className="thought-feed">
      {thoughts.map((message, index) => (
        <div className="each-thought" key={index}>
          <div className="unique-message">{message.message}</div>
            <LikeThought index={index} message={message} setMessageUpdate={setMessageUpdate} messageUpdate={messageUpdate}/>
          <div id="time">{formatDistance(new Date(message.createdAt), new Date(), { addSuffix: true })}</div>
        </div>
      ))}
    </div>
  )
}

PreviousThoughts.propTypes = {
  thoughts: PropTypes.array,
  setMessageUpdate: PropTypes.func,
  messageUpdate: PropTypes.bool,
}
