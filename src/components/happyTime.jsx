import { useState, useEffect } from "react"
import PropTypes from "prop-types"

export const HappyTime = ({ createdAt }) => {
    const [timeAgo, setTimeAgo] = useState(null)

    useEffect(() => {
        const currentTime = new Date()// Current time on the client-side
        const createdTime = new Date(createdAt) // Time when the data was created (from the server)

        // Calculate the time difference
        const timeDifference = Math.floor((currentTime - createdTime) / 1000)

        // Calculate time units (seconds, minutes, hours, days)
        const seconds = timeDifference;
        const minutes = Math.floor(seconds / 60)
        const hours = Math.floor(minutes / 60)
        const days = Math.floor(hours / 24)

        let timeAgoText;

        if (days > 0) {
            timeAgoText = days === 1 ? "1 day ago" : `${days} days ago`
        } else if (hours > 0) {
            timeAgoText = hours === 1 ? "1 hour ago" : `${hours} hours ago`
        } else if (minutes > 0) {
            timeAgoText = minutes === 1 ? "1 minute ago" : `${minutes} minutes ago`
        } else {
            timeAgoText = "now"
        }

        setTimeAgo(timeAgoText)
    }, [createdAt])

    return (
        <span>
            {timeAgo !== null ? timeAgo : "Loading..."}
        </span>
    )
}

HappyTime.propTypes = {
    createdAt: PropTypes.string,
}