import React, { useState } from "react";

const Form = ({ setThoughts }) => {
    const [message, setMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message }),
        })
            .then((res) => res.json())
            .then((newThought) => {
                setThoughts((prevThoughts) => [newThought, ...prevThoughts]);
                setMessage("");
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write a happy thought"
                required
                minLength="5"
                maxLength="140"
            />

            <button className="submit">❤️ Send Happy Thought ❤️</button>
        </form>
    );
};

export default Form;
