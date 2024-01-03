import styles from './PostNewMessage.module.css';
import { useState, useEffect } from "react";

export const PostNewMessage = ({ newMessage, fetchThoughts }) => {
    // using useState to define state variables (nT and eA)
    const [newThoughts, setNewThoughts] = useState("");
    const [errorAlert, setErrorAlert] = useState("");

    //check and set lengt and error for state variables above
    useEffect(() => {
        if (newThoughts.length >= 141) {
            setErrorAlert("Overload of Happy Thoughts\uD83D\uDC94 Please keep it shorter\uD83D\uDCAD");
        }
        else {
            setErrorAlert("")
        }
    }, [newThoughts]);

    // define a function to handle user input and submit the form
    const handleThoughtInput = async (event) => {
        event.preventDefault();
        console.log("newThoughts, onformsubmit:", newThoughts);

        if (newThoughts.length <= 4) {
            setErrorAlert("Not enough Happiness 💔 Please share more📜");
        } else {
            const options = {
                method: "POST",
                body: JSON.stringify({
                    message: `${newThoughts}`,
                }),
                headers: { "Content-Type": "application/json" },
            };

            // Use the new Render backend API
            await fetch("https://happy-api-ec.onrender.com/thoughts", options)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status} - ${response.statusText}`);
                    }
                    return response.json();
                })
                .then((data) => {
                    newMessage(data);
                    console.log(data); //console log, the posts are not posting after changing api
                    setNewThoughts("");
                    fetchThoughts();
                })
                .catch((error) => console.log(error));
        }
    };

    return (
        <div className={styles.thoughtInputBox}>
            <form onSubmit={handleThoughtInput}>
                <h3 className={styles.h3}>What is making you happy right now?</h3>
                <textarea
                    rows="5"
                    cols="50"
                    placeholder="'I wanna be defined by the things that I love.' – TS."
                    value={newThoughts}
                    onChange={(e) => setNewThoughts(e.target.value)}
                />
                <div className={styles.characterCount}>
                    <span className={styles.error}>{errorAlert}</span>
                    <span className={`${styles.length} ${newThoughts.length >= 140 ? styles.red : (newThoughts.length > 0 && newThoughts.length <= 4) ? styles.red : ""}`}>
                        {newThoughts.length}/140
                    </span>
                    {/* (newThoughts.length > 0 && newThoughts.length <= 4) so that the character count is red when there are only1-4 typed*/}
                </div>
                <button type="submit" id={styles.submitThoughtsBtn}>
                    <span className={styles.emoji} aria-label="heart emoji">❤️</span>
                    Send Happy Thought
                    <span className={styles.emoji} aria-label="heart emoji">❤️</span>
                </button>
            </form>
        </div>
    );
};

