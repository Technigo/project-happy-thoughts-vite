import { useState, useEffect } from "react";

export const Form = ({ newMessage, fetchThoughts}) => {

        const [newPost, setNewPost] = useState("");

        const [errorMessage, setErrorMessage] = useState("");

        useEffect(() => {
            if (newPost.lenght >= 141) {
                setErrorMessage("Your message is too long..!");
            } else {
                setErrorMessage("");
            }
        }, [newPost]);

        // useEffect to set an errormessage depending on charachters

        const handleFormSubmit = async (event) => {
            event.preventDefault();
            
            const newPostApi = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts"

            if (newPost.length <= 4) {
                setErrorMessage("Your message is too short, it needs at least 5 letters..!");
            } else {
                const options = {
                    method: "POST",
                    body: JSON.stringify({
                        message: `${newPost}`,
                    }),
                    headers: { "Content-Type": "application/json" },
                };

                await fetch(newPostApi, options)
                .then((response) => response.json())
                .then((data) => {
                    newMessage(data);
                    setNewPost("");
                    fetchThoughts();
                })
                .catch((error) => console.log(error));
            }
        };
    

    return (
        <div className="form-wrapper">
            
            <form className="form-content" onSubmit={handleFormSubmit}>
            <label for="message-input">
                <h2>What's making you happy right now?</h2>
            </label>
                <textarea 
                    id="message-input"
                    cols="30" 
                    rows="5"
                    placeholder="'If music be the food of love, play on.' - William Shakespeare"
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                />
            <div className="post-length" >
                <p className="error">{errorMessage}</p>
                <p className={`lenght ${newPost.length >= 140 ? "red" : ""}`}>
                    {newPost.length}/140
                </p>
            </div>
            <button className="button-submit" type="submit" id="submitPostBtn">
                <img className="button-like-img" src="pixel-heart.png" alt="a pixelated heart"/>Send Happy Thought!<img className="button-like-img" src="pixel-heart.png" alt="a pixelated heart"/>
            </button>
            </form>
        </div>
    );
};