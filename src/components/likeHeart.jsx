import { useState } from "react"
import PropTypes from "prop-types"

export const UpdateHearts = ({ heartID }) => {
    const [likes, setLikes] = useState(heartID.heartCount)
    const [isLiked, setIsLiked] = useState(false)

    // Add new likes on top of the old likes
    const addToHeartCount = async () => {
        if (!isLiked) {
            const heartURL = `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${heartID.heartID}/like`

            const response = await fetch(heartURL, {
                method: "POST",
            })

            if (response.ok) {
                setLikes((likes) => likes + 1)
                setIsLiked(true)
            } else {
                console.error("Error:", response.status)
            }
        }
    };

    return (
        <div>
            <button
                className={`heartButton ${isLiked && "liked"}`}
                onClick={addToHeartCount}
            >
                <span className="emojiHeart">❤️</span>
            </button>
            <span className="likeNumber">×{likes}</span>
        </div>
    )
}

UpdateHearts.propTypes = {
    heartID: PropTypes.shape({
        heartID: PropTypes.string,
        heartCount: PropTypes.number,
    }),
}
