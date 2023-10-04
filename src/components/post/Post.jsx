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
            <Button>
                ❤️
            </Button>
        </Card>
    );
}

export default Post;