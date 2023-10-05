import { useEffect, useState } from "react";
import "./Form.css";

export const Form = ({newThought}) => {
  const [newPost, setNewPost] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (newPost.length >= 141) {
      setErrorMessage("Your message is too long 😔");
    } else {
      setErrorMessage("");
    }
  }, [newPost]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (newPost.length <= 4) {
      setErrorMessage(
        "Your message is too short, it needs at least 5 letters 😔"
      );
    } else {
      const options = {
        method: "POST",
        body: JSON.stringify({
          message: `${newPost}`,
        }),
        headers: { "Content-Type": "application/json" },
      };
    }
  };

  return (
    <div className="form-container">
      <h1>What's making you happy right now?</h1>
      <form>
        <textarea
          rows="3"
          placeholder="Something that makes you happy right now..."
        ></textarea>
        <div className="post-lenght">
          <p className="error-message">Your message is too long 😔</p>
          <p className="message-lenght">0/140</p>
        </div>
        <button
          type="submit"
          className="submit-btn"
          aria-label="button for submiting your post"
        >
          <span>❤️</span>
          Send Happy Thought
          <span>❤️</span>
        </button>
      </form>
    </div>
  );
};


// const addNewThought = (newThought) => {
  //   setThoughts([newThought, ...thoughts]);
  // };