import { useState, useEffect } from 'react';
import { DisplayedPosts } from '../DisplayedPosts/DisplayedPosts';
import { Header } from '../Header/Header.jsx';
import { PostNewMessage } from '../PostNewMessageToWall/PostNewMessage';
import styles from './ContentWrapper.module.css';


export const ContentWrapper = () => {
    const [thoughts, setThoughts] = useState([]);
    const [likedCount, setLikedCount] = useState(0);


    useEffect(() => {
        fetchThoughts();

        const count = JSON.parse(localStorage.getItem('likedPosts') || '[]').length;
        setLikedCount(count);
    }, []);

    const fetchThoughts = () => {
        fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts")
            .then((response) => response.json())
            .then((data) => {
                console.log(JSON.stringify(data, null, 2));
                setThoughts(data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    };

    const addNewThoughts = () => {
        fetchThoughts();
    };


    const updateLikedCount = () => {
        const count = JSON.parse(localStorage.getItem('likedPosts') || '[]').length;
        setLikedCount(count);
    };


    return (
        <div className={styles.wrapper_container}>
            <Header likedCount={likedCount} />  <PostNewMessage newMessage={addNewThoughts} fetchThoughts={fetchThoughts} />
            <DisplayedPosts thoughts={thoughts} likedCount={likedCount} updateLikedCount={updateLikedCount} />

        </div>
    );
}