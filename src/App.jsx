import Container from "./components/container/Container";
import Post from "./components/post/Post";

export const App = () => {
    return (
        <Container>
            <Post
                message="Hola babe"
                hearts={4}
                createdAt="10 seconds ago"
            />
        </Container>
    );
};
