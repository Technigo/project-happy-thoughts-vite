import PropTypes from "prop-types"
import "./list.css"
import { LikeButton } from "./likeButton/LikeButton"

export const ThoughtList = ({ thoughts, onLike }) => {
    return (
        <div className="list-container">
            <ol>
                {thoughts.map((thought, index) => (
                    <li key={index}>{thought.message}
                        <div className="like-container">
                            <LikeButton
                                thoughtId={thought._id}
                                hearts={thought.hearts}
                                onLike={onLike}
                            />
                        </div>
                    </li>
                ))}

            </ol>
        </div>

    )
}

ThoughtList.propTypes = {
    thoughts: PropTypes.array.isRequired,
    onLike: PropTypes.func.isRequired,
}