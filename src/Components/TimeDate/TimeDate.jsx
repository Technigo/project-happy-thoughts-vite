import styles from './TimeDate.module.css';

export const TimeDate = ({ timePosted }) => {

    let thisTime = timePosted.time;

    const timePassed = (pastTime) => {
        const now = new Date();
        const timeDifference = now - new Date(pastTime);
        const seconds = Math.floor(timeDifference / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const weeks = Math.floor(days / 7);
        const months = Math.floor(days / 30);
        //less then a minute ago
        if (seconds < 60) {
            return "less than one minute ago";
        } else if (minutes < 60) {
            return minutes === 1 ? "1 minute ago" : `${minutes} minutes ago`;
        } else if (hours < 24) {
            return hours === 1 ? "1 hour ago" : `${hours} hours ago`;
        } else if (days < 7) {
            return days === 1 ? "1 day ago" : `${days} days ago`;
        } else if (weeks < 4) {
            return weeks === 1 ? "1 week ago" : `${weeks} weeks ago`;
        } else if (months < 12) {
            return months === 1 ? "1 month ago" : `${months} months ago`;
        } else {
            const years = Math.floor(days / 365);
            return years === 1 ? "1 year ago" : `${years} years ago`;
        }
    }

    const displayTime = timePassed(thisTime);

    return (
        <div className={styles.timeAndDate}>
            {displayTime}
        </div>
    );
}
