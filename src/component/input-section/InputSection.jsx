import { useState } from "react";
import "./InputSection.css";
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
      name="thought-input"
      id="thought-input"
      onSubmit={handleSubmit}
    >
      <label htmlFor="happy-input">
        What&#39;s making you happy right now?
      </label>
      <input
        type="text"
        value={newPost}
        id="happy-thought"
        name="happy-thought"
        onChange={handleNewPost}
      />
      <p
        className={
          isMaxLengthExceeded ? "character-count-max" : "character-count"
        }
      >
        {characterCount}/140
      </p>
      <button type="submit">❤️Send Happy Thought❤️</button>
      <ErrorMessage
        isMaxLengthExceeded={isMaxLengthExceeded}
        isPostEmpty={isPostEmpty}
        postError={postError}
        submitted={submitted}
        setSubmitted={setSubmitted}
      />
    </form>
  );
};
