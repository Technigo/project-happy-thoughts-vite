import { useState, useEffect } from "react";
import "./form.css";

export const Form = ({ newMessage, fetchPosts }) => {
  const [newPost, setNewPost] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (newPost.length >= 141) {
      setErrorMessage("Your message is too long 😔");
    } else {
      setErrorMessage("");
    }
  }, [newPost]); 

  
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log("Submitting form...");
    if (newPost.length <= 4) {
      setErrorMessage("Your message is too short, it needs at least 5 letters 😔");
    } else {
      const options = {
        method: "POST",
        body: JSON.stringify({
        message: `${newPost}`,
       }),
       headers: { "Content-Type": "application/json" },
      };
  
     await fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts", options)
     .then((response) => response.json())
     .then((data) => {
      newMessage(data);
      setNewPost("");
      fetchPosts();
     })
     .catch((error) => console.log(error));
    }
  };

  return (
    <div className="text-area-wrapper">
      <h2>What is making you happy right now?</h2>

      <form onSubmit={handleFormSubmit}>
      <textarea
          rows="5"
          cols="50"
          placeholder="'If music be the food of love, play on.' – William Shakespeare"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        />
        <div>
          <p className="error">{errorMessage}</p>
          <p className={`length ${newPost.length >= 140 ? "red" : ""}`}>
            <div className="characters">
            {newPost.length}/140
            </div>
          </p>
        </div>

        <button type="submit" id="submitPostBtn" className="submit-btn">
          ❤️ Send Happy Thought ❤️
        </button>
      </form>
    </div>
  );
};