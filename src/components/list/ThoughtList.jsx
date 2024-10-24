import PropTypes from "prop-types"
import "./list.css"

export const ThoughtList = ({ thoughts }) => {
    return (
        <div className="list-container">
            <ul>
                {thoughts.map((thought, index) => (
                    <li key={index}>{thought.message}</li>
                ))}

            </ul>
        </div>
    )
}

ThoughtList.propTypes = {
    thoughts: PropTypes.arrayOf(PropTypes.shape({ message: PropTypes.string.isRequired }))
}