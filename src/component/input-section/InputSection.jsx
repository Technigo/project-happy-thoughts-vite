import { useState } from "react";
import { ErrorMessage } from "../ErrorMessage";

export const InputSection = ({ handleUpdate }) => {
  const url = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

  const [newPost, setNewPost] = useState("");
  const [characterCount, setCharacterCound] = useState(0);
  const [postError, setPostError] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const maxTextLength = 140;
  const isMaxLengthExceeded = characterCount > maxTextLength;
  const isPostEmpty = characterCount === 0;

  const handleNewPost = (event) => {
    const userInputText = event.target.value;
    const userCharacterCount = userInputText.length;
    setNewPost(userInputText);
    setCharacterCound(userCharacterCount);
    setSubmitted(false);
  };

  const handlePostError = () => {
    setPostError(isMaxLengthExceeded || isPostEmpty);
    if (!isMaxLengthExceeded && !isPostEmpty) {
      setPostError(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitted(true);

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: newPost }),
      });

      if (!response.ok) {
        console.log("Post failed");
      } else {
        console.log("Posted!");
        setNewPost("");
      }
      handlePostError();
      handleUpdate();
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <form
      className="input-section"
      name="thought-form"
      id="thought-form"
      onSubmit={handleSubmit}
    >
      <label htmlFor="thought-input">
        What&#39;s making you happy right now?
        <input
          type="text"
          value={newPost}
          id="thought-input"
          name="thought-input"
          onChange={handleNewPost}
        />
      </label>
      <div className="post-info">
        <p
          className={
            isMaxLengthExceeded ? "character-count-max" : "character-count"
          }
        >
          {characterCount}/140
        </p>
        <ErrorMessage
          isMaxLengthExceeded={isMaxLengthExceeded}
          isPostEmpty={isPostEmpty}
          postError={postError}
          submitted={submitted}
          setSubmitted={setSubmitted}
        />
      </div>
      <div className="interactive-section">
        <button className="send-btn" type="submit">
          <span className="post-heart-icon">❤️</span> Send Happy Thought{" "}
          <span className="post-heart-icon">❤️</span>
        </button>
      </div>
    </form>
  );
};
