import "./time.css"
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'


const getTimeDifference = (createdAt) => {
    const now = new Date();
    const createdDate = new Date(createdAt);
    const differenceInSeconds = Math.floor((now - createdDate) / 1000)

    if (differenceInSeconds < 60) {
        return `${differenceInSeconds} seconds ago`
    } else if (differenceInSeconds < 3600) {
        const minutes = Math.floor(differenceInSeconds / 60)
        return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`
    } else if (differenceInSeconds < 86400) {
        const hours = Math.floor(differenceInSeconds / 3600)
        return `${hours} ${hours === 1 ? "hour" : "hours"} ago`
    } else if (differenceInSeconds < 2592000) {
        const days = Math.floor(differenceInSeconds / 86400)
        return `${days} ${days === 1 ? "day" : "days"} ago`
    } else {
        const months = Math.floor(differenceInSeconds / 2592000)
        return `${months} ${months === 1 ? "month" : "months"} ago`
    }
};

export const Time = ({ createdAt }) => {
    const [timeAgo, setTimeAgo] = useState(getTimeDifference(createdAt))

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeAgo(getTimeDifference(createdAt))
        }, 60000)

        return () => clearInterval(timer);
    }, [createdAt]);

    return <span className="time">{timeAgo}</span>
}

Time.propTypes = {
    createdAt: PropTypes.string.isRequired,
}