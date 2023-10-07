// Importing necessary libraries and components
import dayjs from "dayjs";  // A library for parsing, formatting, and manipulating dates
import relativeTime from "dayjs/plugin/relativeTime";  // Plugin for dayjs to handle relative time
import Button from "../button/Button";  // A custom Button component
import Card from "../card/Card";  // A custom Card component
import styles from "./Post.module.css";  // CSS module for styling

// Extending dayjs with the relativeTime plugin
dayjs.extend(relativeTime);

// Defining the React component 'Post' using a functional component
const Post = ({
    id,
    message,
    hearts,
    createdAt,
}) => {
    // This is the JSX code that defines what the component will render
    return (
        <Card className={styles.card}>
            <p className={styles.message}>{message}</p>
            <div className={styles.footer}>
                <div>
                    <Button>
                        ❤️
                    </Button>
                    <span className={styles.hearts}>
                        {`x ${hearts}`}
                    </span>
                </div>
                <span className={styles.time}>{dayjs(createdAt).fromNow()}</span>
            </div>
        </Card>
    );
}

// Exporting the component as the default export of this module
export default Post;
