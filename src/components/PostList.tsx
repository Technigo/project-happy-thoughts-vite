/**
 * PostList Component
 * 
 * This component renders a list of Happy Thoughts. Each thought includes:
 * - A message
 * - A like button with the current like count
 * - A timestamp
 * 
 * Key Features:
 * - Each post is uniquely identified using the `_id` field as a key prop.
 * - The `addLike` function is called when the like button is clicked, updating the like count for the corresponding post.
 * - Accessibility is enhanced with `aria-label` attributes for the like button and the like count.
 * 
 * TypeScript Integration:
 * 
 * Props Validation:
 *   - `happyPosts`: An array of `HappyPost` objects, ensuring type safety for the list of posts.
 *   - `addLike`: A function that takes a `number` (postId) and performs an action (`void`).
 * 
 * Interface `HappyPost`:
 * Defines the structure of a post.
 *   - `message` (string): The text of the thought.
 *   - `_id` (number): The unique identifier for the post.
 *   - `hearts` (number): The number of likes for the post.
 *   - `createdAt` (string): The timestamp for when the post was created.
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
