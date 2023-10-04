import Button from "../button/Button";
import Card from "../card/Card";
import styles from "./Post.module.css";

const Post = ({
    id,
    message,
    hearts,
    createdAt,
}) => {
    return (
        <Card>
            <p>{message}</p>
            <div className={styles.footer}>
                <div>
                    <Button>
                        ❤️
                    </Button>
                    <span className={styles.hearts}>
                        {`x ${hearts}`}
                    </span>
                </div>
                <span className={styles.time}>{createdAt}</span>
            </div>
        </Card>
    );
}

export default Post;