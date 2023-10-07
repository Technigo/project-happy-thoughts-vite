import Container from "./components/container/Container";
import Post from "./components/post/Post";
import Form from "./components/form/Form";
import { useEffect, useState } from "react";

export const App = () => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    // This is a React Hook that is executed when the component is mounted
    useEffect(() => {
        // This is an asynchronous function to fetch data from a server
        const getPosts = async () => {
            try {
                // It sends a GET request to this URL
                const result = await fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts");
                // It waits for the response and converts it to JSON format
                const data = await result.json();

                // It sets the state of 'posts' in the component with modified data
                setPosts(data.map((post) => ({
                    id: post._id,
                    message: post.message,
                    hearts: post.hearts,
                    createdAt: post.createdAt,
                })));
            } catch {
                // If there's an error during fetching, this block of code is executed
                setError(true);
            } finally {
                // This block of code is executed no matter what, to stop loading state
                setLoading(false);
            }
        };

        // This line calls the function 'getPosts' defined above
        getPosts();

        // The empty array here [] means this effect will only run when the component mounts
    }, []);

    return (
        <Container>
            <Form />
            {loading && (
                <p>Loading posts ...</p>
            )}
            {error && (
                <p>Could not get posts</p>
            )}
            {!loading && !error && posts.map((post) => (
                <Post
                    id={post.id}
                    key={post.id}
                    message={post.message}
                    hearts={post.hearts}
                    createdAt={post.createdAt}
                />
            ))}
        </Container>
    );
};
