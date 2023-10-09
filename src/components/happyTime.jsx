import { useState, useEffect } from "react"
import PropTypes from "prop-types"

export const HappyTime = ({ createdAt }) => {
    const [minutesAgo, setMinutesAgo] = useState(null);

    useEffect(() => {
        // Calculate the happy-time
        const now = new Date()
        const messageTimestamp = new Date(createdAt)
        const timeDifference = now - messageTimestamp
        const minutes = Math.floor(timeDifference / (1000 * 60))

        setMinutesAgo(minutes)
    }, [createdAt])


    return (
        <span>
            {minutesAgo !== null ? `${minutesAgo} minutes ago` : "Loading..."}
        </span>
    )
}

HappyTime.propTypes = {
    createdAt: PropTypes.string,
}