// Importing necessary libraries and components
import dayjs from "dayjs";  // A library for parsing, formatting, and manipulating dates
import relativeTime from "dayjs/plugin/relativeTime";  // Plugin for dayjs to handle relative time
import Button from "../button/Button";  // A custom Button component
import Card from "../card/Card";  // A custom Card component
import styles from "./Post.module.css";  // CSS module for styling
import { useState } from "react";

// Extending dayjs with the relativeTime plugin
dayjs.extend(relativeTime);

// Defining the React component 'Post' using a functional component
const Post = ({
    id,
    message,
    hearts,
    createdAt,
}) => {
    // State for managing the number of hearts and the sending status of likes
    const [heartCount, setHeartCount] = useState(hearts);
    const [sendingLike, setSendingLike] = useState(false);

    // Function to handle liking a post
    const heartPost = async () => {
        try {
            setSendingLike(true); // Set the sending status to true

            // Send a POST request to like the post
            const result = await fetch(`${import.meta.env.VITE_API_URL}/thoughts/${id}/like`, { method: "POST" });

            if (result.ok) {
                // If the like was successful, update the heart count
                setHeartCount((prev) => prev + 1);
            }
        } catch (error) {
            console.error(error); // Log any errors to the console
        } finally {
            setSendingLike(false); // Set the sending status back to false, regardless of success or failure
        }
    }

    // This is the JSX code that defines what the component will render
    return (
        <Card className={styles.card}>
            <p className={styles.message}>{message}</p>
            <div className={styles.footer}>
                <div>
                    {/* Button to like the post, with an onClick handler and disabled status */}
                    <Button onClick={heartPost} disabled={sendingLike}>
                        ❤️
                    </Button>
                    <span className={styles.hearts}>
                        {`x ${heartCount}`} {/* Display the number of hearts */}
                    </span>
                </div>
                {/* Display the time since the post was created */}
                <span className={styles.time}>{dayjs(createdAt).fromNow()}</span>
            </div>
        </Card>
    );
}

// Exporting the component as the default export of this module
export default Post;
