import { useState, useEffect } from "react";

//taking two props, to add new thoughts and fetch thoughts from API
export const Form = ({ newMessage, fetchThoughts}) => {

        //initiating state hooks, holding content of new thought/user error
        const [newPost, setNewPost] = useState("");
        const [errorMessage, setErrorMessage] = useState("");

        //checking lenght of message whenever it changes.
        useEffect(() => {
            if (newPost.length >= 141) {
                setErrorMessage("Your message is too long..!");
            } else {
                setErrorMessage("");
            }
        }, [newPost]);

        //function is called in form in return!
        const handleFormSubmit = async (event) => {
            event.preventDefault();
            
            const newPostAPI = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts"

            //conditional: to continue the message needs to be 5 letters.
            if (newPost.length <= 4) {
                setErrorMessage("Your message is too short, it needs at least 5 letters..!");
            } else {
                //defining request options for the fetch, adding content of newPost(textarea)!
                const options = {
                    method: "POST",
                    body: JSON.stringify({
                        message: `${newPost}`,
                    }),
                    headers: { "Content-Type": "application/json" },
                };

                await fetch(newPostAPI, options)
                //to the API, the new message has been sent. Then converting response to JSON
                .then((response) => response.json())
                .then((data) => {
                    //Calling newMessage function(in App (addNewPost)!)
                    //Clear the text area field, and fetches the updated thoughts.
                    newMessage(data);
                    setNewPost("");
                    fetchThoughts();
                })
                .catch((error) => console.log(error));
            }
        };
    

    return (
        <div className="form-wrapper">
            {/*Calling the handleFormSubmit when submit button is clicked! */}
            <form className="form-content" onSubmit={handleFormSubmit}>

                <label htmlFor="message-input">
                    <h2>What's making you happy right now?</h2>
                </label>
                <textarea 
                    id="message-input"
                    cols="30" 
                    rows="5"
                    placeholder="'If music be the food of love, play on.' - William Shakespeare"
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}/>
                <div className="post-length" >
                    {/*post length with conditionale className, and error message. */}
                    <p className="error">{errorMessage}</p>
                    <p className={`lenght ${newPost.length >= 140 ? "red" : ""}`}>
                        {newPost.length}/140
                    </p>
                </div>
                <button className="button-submit" type="submit" id="submitPostBtn">
                    <div className="button-content">
                        <img className="button-like-img" src="pixel-heart.png" alt="a pixelated heart"/>Send Happy Thought!<img className="button-like-img" src="pixel-heart.png" alt="a pixelated heart"/>
                    </div>
                </button>
            </form>
        </div>
    );
};