import PropTypes from "prop-types"
import "./animation.css"

export const HeartAnimation = ({ isVisible }) => {
  return (
    <>
      {isVisible && (
        <div className="heart-animation">
          ❤️ {/* Heart emoji */}
        </div>
      )}
    </>
  )
}

HeartAnimation.propTypes = {
  isVisible: PropTypes.bool.isRequired, // Prop to control visibility
}

