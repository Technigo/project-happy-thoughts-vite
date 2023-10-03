import "./form-elements.css"

export const PostThoughtButton = ({ onClick }) => {
    return (
        <button className="post-thought-button" type="submit" onClick={onClick}>
            <span className="heart">❤️</span>Send Happy Thought<span className="heart">❤️</span>
        </button>
    )
}
