import Container from "./components/container/Container";
import Post from "./components/post/Post";
import Form from "./components/form/Form";

export const App = () => {
    return (
        <Container>
            <Form />
            <Post
                message="Hola babe"
                hearts={4}
                createdAt="10 seconds ago"
            />
        </Container>
    );
};
