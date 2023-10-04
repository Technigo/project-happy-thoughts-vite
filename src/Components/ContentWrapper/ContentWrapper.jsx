import { useState, useEffect } from "react";
import { DisplayedPosts } from '../DisplayedPosts/DisplayedPosts';
import { Header } from '../Header/Header.jsx';
import { PostNewMessage } from '../PostNewMessageToWall/PostNewMessage';
import styles from "./ContentWrapper.module.css"


export const ContentWrapper = () => {
    const [thoughts, setThoughts] = useState([]);

    const fetchThoughts = () => {
        fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts")
            .then((response) => response.json())
            .then((data) => {
                setThoughts(data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    };

    const addNewThoughts = (message) => {
        console.log("New thought added:", message);
        fetchThoughts();
    };


    useEffect(() => {
        fetchThoughts();
    }, []);

    return (
        <div className={styles.wrapper_container}>
            <Header />
            <PostNewMessage newMessage={addNewThoughts} fetchThoughts={fetchThoughts} />
            <DisplayedPosts thoughts={thoughts} />
            {/*Pass state to DP*/}
        </div>
    );
}