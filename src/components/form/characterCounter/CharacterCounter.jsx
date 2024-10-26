import PropTypes from "prop-types"
import "./characterCounter.css"

export const CharacterCounter = ({ currentLength, maxChars }) => {
    const charsLeft = maxChars - currentLength
    const isOverLimit = currentLength > 140

    return (
        <div className={`character-count ${isOverLimit ? "warning" : ""}`}>
            {charsLeft} characters left
        </div>
    )
}

CharacterCounter.propTypes = {
    currentLength: PropTypes.number.isRequired,
    maxChars: PropTypes.number.isRequired,
}