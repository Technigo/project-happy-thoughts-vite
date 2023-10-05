import styles from './PostNewMessage.module.css';
import { useState, useEffect } from "react";

export const PostNewMessage = ({ newMessage, fetchThoughts }) => {

    const [newThoughts, setNewThoughts] = useState("");
    const [errorAlert, setErrorAlert] = useState("");


    useEffect(() => {
        if (newThoughts.length >= 141) {
            setErrorAlert("Oh no... You seem to have a lot of happy thoughts, unfortunatley your message is too long")
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
                "Your message is too short, please share more of your thoughts"
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
            <h3 className={styles.h3}>What is making you happy right now?</h3>
            <form onSubmit={handleThoughtInput}>
                <textarea
                    rows="5"
                    cols="50"
                    placeholder="'I wanna be defined by the things that I love.' – TS."
                    value={newThoughts}
                    onChange={(e) => setNewThoughts(e.target.value)}
                />
                <div>
                    <p className="error">{errorAlert}</p>
                    <p className={`length ${newThoughts.length >= 140 ? "red" : ""}`}>
                        {newThoughts.length}/140
                    </p>
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

