/* eslint-disable react/prop-types */

/**
 * PostList component
 * /**
 * - This component is used to display a list of posted Happy thoughts. 
 * - It is using a unique key prop to make each post individual. 
 * - It receives a list of posts and a function to handle likes as props, rendering each post with its message, a like button, displays number of likes and a time stamp.
 */

// TypeScript: Define the structure of a HappyPost object
interface HappyPost {
    message: string,
    _id: number,
    hearts: number,
    createdAt: string;
}

// TypeScript: Define the props passed into the PostList component.
interface PostListProps {
    happyPosts: HappyPost[] // Array of HappyPost objects to render
    addLike:(postId: number) => void // Function to handle liking a post. It performs an action/side effect, but doesn't provide a result or return any value (void).
}

// TypeScript: Pass PostListProps interface as the parameter type in this component. 
const PostList = ({ happyPosts, addLike }: PostListProps) => (
    <div className="posts-container">
        {happyPosts.map((post) => (
            <div key={post._id} className="post-box">
                <p className="post-text">{post.message}</p>
                <div className="post-info">
                    <div className="like-container">
                        <button
                            aria-label={`Like post with message: ${post.message}`}
                            className={`like-button ${post.hearts === 0 ? 'notLikedClass' : 'likedClass'}`}
                            onClick={() => addLike(post._id)}
                        >
                            <span className="heart-icon" aria-label="Like icon">❤️</span> {/* Target heart icon */}
                        </button>
                        <span className="like-count" aria-label="Number of likes"> x {post.hearts}</span> {/* Display likes outside the button */}
                    </div>
                    <p className="post-timestamp">
                        {/* undefined to present date/time in the user's location e.g. 24 hour clock vs AM/PM*/}
                        Posted at: {new Date(post.createdAt).toLocaleString(undefined, {
                            year: 'numeric',
                            month: '2-digit',
                            day: '2-digit',
                            hour: '2-digit',
                            minute: '2-digit'
                        })}
                        {/* Format: YYYY, MM, DD, HH, MM */}
                    </p>
                </div>
            </div>
        ))}
    </div>
)
export default PostList
