import PropTypes from 'prop-types'
import {LikeThought} from './LikeThought'

export const PreviousThoughts = ({ thoughts, URL, renderThoughts }) => {
    
    function timeAgo(date) {
        const seconds = Math.floor((new Date() - date) / 1000);
    
        const interval = Math.floor(seconds / 31536000);
    
        if (interval > 1) {
            return interval + " years ago";
        }
        if (interval === 1) {
            return interval + " year ago";
        }
    
        const months = Math.floor(seconds / 2628000);
        if (months > 1) {
            return months + " months ago";
        }
        if (months === 1) {
            return months + " month ago";
        }
    
        const days = Math.floor(seconds / 86400);
        if (days > 1) {
            return days + " days ago";
        }
        if (days === 1) {
            return days + " day ago";
        }
    
        const hours = Math.floor(seconds / 3600);
        if (hours > 1) {
            return hours + " hours ago";
        }
        if (hours === 1) {
            return hours + " hour ago";
        }
    
        const minutes = Math.floor(seconds / 60);
        if (minutes > 1) {
            return minutes + " minutes ago";
        }
        if (minutes === 1) {
            return minutes + " minute ago";
        }
    
        return "just now";
    }
  return (
    <div className="thought-feed">
      {thoughts.map((message, index) => (
        <div className="each-thought" key={index}>
          <div id="unique-message">{message.message}</div>
            <LikeThought index={index} message={message} URL={URL} renderThoughts={renderThoughts}/>
          <div id="time">{timeAgo(new Date(message.createdAt))}</div>
        </div>
      ))}
    </div>
  )
}

PreviousThoughts.propTypes = {
  thoughts: PropTypes.array,
  URL: PropTypes.string,
  renderThoughts: PropTypes.funct,
}
