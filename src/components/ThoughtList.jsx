import PropTypes from "prop-types"

export const ThoughtList = ({ thoughts }) => {
    return (
        <ul>
            {thoughts.map((thought, index) => (
                <li key={index}>{thought.message}</li>
            ))}
        </ul>
    )
}

ThoughtList.propTypes = {
    thoughts: PropTypes.arrayOf(PropTypes.shape({ message: PropTypes.string.isRequired }))
}