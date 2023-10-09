import Container from "./components/container/Container";
import Post from "./components/post/Post";
import Form from "./components/form/Form";
import { useEffect, useState } from "react";
import Loading from "./loading/Loading";
import Error from "./error/Error";
import Header from "./header/Header";

// Defining a functional component named 'App'
export const App = () => {
    // Creating state variables using the 'useState' hook
    const [posts, setPosts] = useState([]);  // State for storing posts
    const [error, setError] = useState(false);  // State for tracking errors
    const [loading, setLoading] = useState(true);  // State for tracking loading status

    const addPost = (post) => {
        // Using the setPosts function to update the 'posts' state
        setPosts((prev) => ([
            // Creating a new array by spreading the previous state and adding the new 'post'
            ...prev,
            post,
        ]));
    }

    // This is a React Hook that is executed when the component is mounted
    useEffect(() => {
        // This is an asynchronous function to fetch data from a server
        const getPosts = async () => {
            try {
                // It sends a GET request to this URL
                const result = await fetch(`${import.meta.env.VITE_API_URL}/thoughts`);
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

    // This line attempts to sort the 'posts' array based on the 'createdAt' dates in descending order.
    const sortedPosts = posts.toSorted((current, next) => new Date(next.createdAt).getTime() - new Date(current.createdAt).getTime());

    return (
        // Returning JSX
        <Container>
            <Header />
            <Form addPost={addPost} /> {/* Rendering a Form component */}
            {loading && (
                // Conditional rendering: Display a loading component if 'loading' is true
                <Loading />
            )}
            {error && (
                // Conditional rendering: Display this paragraph if 'error' is true
                <Error />
            )}
            {!loading && !error && sortedPosts.map((post) => (
                // Conditional rendering: If 'loading' and 'error' are false, render the following
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
}
