import PropTypes from "prop-types"
import "./list.css"
import { LikeButton } from "./likeButton/LikeButton"

export const ThoughtList = ({ thoughts }) => {
    return (
        <div className="list-container">
            <ol>
                {thoughts.map((thought, index) => (
                    <li key={index}>{thought.message}
                        <div className="like-container">
                            <LikeButton />
                        </div>
                    </li>
                ))}

            </ol>
        </div>

    )
}

ThoughtList.propTypes = {
    thoughts: PropTypes.arrayOf(PropTypes.shape({ message: PropTypes.string.isRequired }))
}