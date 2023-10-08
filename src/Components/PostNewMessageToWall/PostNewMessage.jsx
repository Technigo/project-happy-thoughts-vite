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

        //check error and set lengt?
        if (newThoughts.length <= 4) {
            setErrorAlert(
                "Not enough Happiness \uD83D\uDC94 Please share more\uD83D\uDCAD"
            );
        } else {
            // POST used for sending data to the server
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
                .then((response) => response.json())
                // parses the response from the server

                //allows to work with the data received from the server.
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

