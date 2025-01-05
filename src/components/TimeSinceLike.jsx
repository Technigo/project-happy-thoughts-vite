



/* export const LikesTimeAgo = ({ time }) => {

// Utility function to calculate "time ago"
const timeAgo = (timestamp) => {
    const now = new Date();
    const postDate = new Date(timestamp);
    const secondsAgo = Math.floor((now - postDate) / 1000);
  
    if (secondsAgo < 60) return `${secondsAgo} seconds ago`;
    const minutesAgo = Math.floor(secondsAgo / 60);
    if (minutesAgo < 60) return `${minutesAgo} minutes ago`;
    const hoursAgo = Math.floor(minutesAgo / 60);
    if (hoursAgo < 24) return `${hoursAgo} hours ago`;
    const daysAgo = Math.floor(hoursAgo / 24);
    return `${daysAgo} days ago`;
  };

    return (
        <div className="likes-time-ago-div">
            <p className="hp-time">{timeSinceLike}</p>
        </div>
    )
}  */