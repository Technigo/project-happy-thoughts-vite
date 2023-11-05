import { useEffect, useState } from "react"

export const PostThought = () => {

const [newPost, setNewPost] = useState("");
const [errorMessage, setErrormessage] = useState("");

//useEffect hook handles +140 characters
useEffect(() => {
    if (newPost.length >=141) {
        setErrormessage("Your thought is too long, simmer it down a bit");
    } else {
        setErrormessage("");
    }
}, [newPost]);

const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log("newPost onformsubmit:", newPost);

    if (newPost.length <= 4) {
        alert("Your thought is too short, think a little more (at least 5 characters)");
    } else {
        const options = {
            method: "POST",
            body: JSON.stringify({message: `${newPost}`,
        }),
        headers: { "Content-Type": "application/json" },
        };

        await fetch(
            "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts", options)
            
            .then((response) => response.json())
            .then((data) => {
                newMessage(data);
                setNewPost("");
                fetchPosts();
            })
            .catch((error) => console.log(error));
    }

    function refreshPage(){
        window.location.reload(false);
    }
refreshPage();
};

  return (
    //Current thought
    <div className="smallCurrentThought">
        <p>What is making you happy right now?</p>

    <form id="inputForm" onSubmit={handleFormSubmit}>
        <textarea className="inputBox"
        rows="5"
        cols="50"
        placeholder="Please share what makes you happy with the rest of the world!"
        value={newPost}
        onChange={(e) => setNewPost(e.target.value)}
        />
        <div>
    <p className="error">{errorMessage}</p>
    <p className={`length ${newPost.length >= 140 ? "turn-text-red" : "text-stays-normal"}`}>
        {newPost.length}/140
    </p>
        </div> 

        <button type="submit" id="post-thought-btn">Post your thoughts
        </button>
    </form>
    </div>
  )
}

