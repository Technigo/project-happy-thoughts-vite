import { useState } from "react";
import Button from "../button/Button";
import Card from "../card/Card";
import styles from "./Form.module.css";

const Form = ({ addPost }) => {
    const [message, setMessage] = useState("")
    return (
        <Card className={styles.inputCard}>
            <label className={styles.label} htmlFor="message">What's making you happy right now?</label>
            <textarea
                id="message"
                rows="3"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="'If music be the food of love, play on.' - William Shakespeare"
                className={styles.input}
            />
            <div className={styles.information}>
                <p></p>
                <p className={styles.characters}>{`${message.length}/140`}</p>
            </div>
            <Button className={styles.send}>
                ❤️ Send Happy Thought ❤️
            </Button>
        </Card>
    );
}

export default Form;