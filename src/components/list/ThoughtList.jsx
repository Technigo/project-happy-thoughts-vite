import PropTypes from "prop-types"
import "./list.css"
import { LikeButton } from "./likeButton/LikeButton"
import { Time } from "./time"


export const ThoughtList = ({ thoughts, onLike }) => {
    return (
        <div className="list-container">
            <ol>
                {thoughts.map((thought) => (
                    <li key={thought._id}>{thought.message}
                        <div className="like-container">
                            <div>
                                <LikeButton
                                    thoughtId={thought._id}
                                    hearts={thought.hearts}
                                    onLike={onLike}
                                />
                            </div>
                            <Time createdAt={thought.createdAt} />
                        </div>
                    </li>
                ))}

            </ol>
        </div>

    )
}

ThoughtList.propTypes = {
    thoughts: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string.isRequired,
        message: PropTypes.string.isRequired,
        hearts: PropTypes.number.isRequired,
        createdAt: PropTypes.string.isRequired
    })
    ).isRequired,
    onLike: PropTypes.func.isRequired,
}