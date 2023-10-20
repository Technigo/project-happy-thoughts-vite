import { useState, useEffect } from "react";
import "../CreateThought/CreateThought.css";

export const CreateThought = () => {
  const [newPost, setNewPost] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    //I've started with this but it's not working yet
    if (newPost.length <= 4) {
      setErrorMessage("Please type a 5 letter-Happy thought "); // Error if too short
    } else {
      const options = {
        method: "POST",
        body: JSON.stringify({
          message: `${newPost}`,
        }),
        headers: { "Content-Type": "application/json" },
      };

      try {
        // POST request
        const response = await fetch(
          "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts",
          options
        );
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="text-area-wrapper">
      <h2>What is making you happy right now?</h2>

      <form onSubmit={handleFormSubmit}>
        <textarea
          className="text-area"
          rows="3"
          cols="50" //TO keep the text from flowing over
          placeholder="'If we have no peace, it's beacuse we've forgotten that we belong to each-other' - Mother Theresa"
          value={newPost}
          onChange={(event) => setNewPost(event.target.value)}
        />

        <button type="submit" id="submitPostBtn" className="submit-btn">
          ❤️ Send Happy Thought ❤️
        </button>
      </form>
    </div>
  );
};
