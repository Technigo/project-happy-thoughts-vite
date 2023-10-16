import { useState, useEffect } from "react"
import PropTypes from "prop-types"

export const HappyTime = ({ createdAt }) => {
    const [minutesAgo, setMinutesAgo] = useState(null);

    useEffect(() => {
        // Calculate the happy-time
        const currentTime = new Date(); // Current time on the client-side
        const createdTime = new Date(createdAt); // Time when the data was created (from the server)

        // Calculate the time difference
        const timeDifference = Math.floor((currentTime - createdTime) / 1000 / 60); // in minutes


        setMinutesAgo(timeDifference)
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