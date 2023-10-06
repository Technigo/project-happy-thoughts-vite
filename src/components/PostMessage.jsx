import React, { useState } from "react";

export const PostMessage = ({ newMessage }) => {
    const [newPost, setNewPost] = useState(""); //stores the users message
    const [errorMessage, setErrorMessage] = useState(""); //shows errors that might happen

    const handleSubmit = async () => {
        console.log("Submit button clicked");
        // Clear any previous error messagages
        setErrorMessage("");

        // Check if the message is too short
        if (newPost.length < 5) {
            setErrorMessage("Your message is too short, use aminimum of 5 characters!");
            return; // Exit the function to prevent further execution
        } else if (newPost.length > 140) {
            setErrorMessage("Your message is too long, use maximum of 140 characters!");
            return; // Exit the function to prevent further execution
        }
        try {
            //if message is correct then send 
            const response = await fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    message: newPost,
                }),
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }


            const data = await response.json();
            newMessage(data);

            // Clear the input field
            setNewPost("");
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (

        //returning/defining the looks of the form 
        <div className="commentInput">
            <div className="commentContent">
                <h2>Post your happy message!</h2>
                <textarea className="commentBox"
                    rows="5"
                    cols="50"
                    placeholder="Food makes me happy!"
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                />
                <p className="error">{errorMessage}</p>
                <p
                    className={`length ${newPost.length >= 140 ? "red" : ""}`}

                >
                    {newPost.length}/140
                </p>
                <button onClick={handleSubmit}>
                    <img
                        width="20"
                        height="20"
                        src="https://img.icons8.com/emoji/48/heart-suit.png"
                        alt="heart-suit"
                    />
                    Send Happy Thoughts
                    <img
                        width="20"
                        height="20"
                        src="https://img.icons8.com/emoji/48/heart-suit.png"
                        alt="heart-suit"
                    /></button>
            </div>
        </div>
    );
};
