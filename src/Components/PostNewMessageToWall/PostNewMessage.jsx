import styles from './PostNewMessage.module.css';
import { useState, useEffect } from "react";

export const PostNewMessage = ({ newMessage, fetchThoughts }) => {

    const [newThoughts, setNewThoughts] = useState("");
    const [errorAlert, setErrorAlert] = useState("");


    useEffect(() => {
        if (newThoughts.length >= 141) {
            setErrorAlert("Overload of Happy Thoughts\uD83D\uDC94 Please keep it shorter\uD83D\uDCAD");
        }
        else {
            setErrorAlert("")
        }
    }, [newThoughts]);

    const handleThoughtInput = async (event) => {
        event.preventDefault();
        console.log("newThoughts, onformsubmit:", newThoughts);

        if (newThoughts.length <= 4) {
            setErrorAlert(
                "Not enough Happiness \uD83D\uDC94 Please share more\uD83D\uDCAD"
            );
        } else {
            const options = {
                method: "POST",
                body: JSON.stringify({
                    message: `${newThoughts}`,
                }),

                headers: { "Content-Type": "application/json" },
            };

            await fetch(
                "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts",
                options
            )
                .then((response) => response.json()) // 
                .then((data) => {
                    newMessage(data);
                    setNewThoughts("");
                    fetchThoughts();
                })
                .catch((error) => console.log(error));
        };
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
                    {/* (newThoughts.length > 0 && newThoughts.length <= 4) so that the character count is red when there are 1-4 characters.
                     Span for placing error on the same line as number of character, error at top, moves it to the right*/}
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

