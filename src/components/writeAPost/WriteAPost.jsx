import "./writeapost.css";
import { useState, useEffect } from "react";

export const WriteAPost = () => {
  const [totalCharacters, setTotalCharacters] = useState(0);

  const [exceedLimit, setExceedLimit] = useState(false);

  useEffect(() => {
    if (totalCharacters > 140) {
      setExceedLimit(true);
    } else if (totalCharacters <= 140) {
      setExceedLimit(false);
    }
  }, [totalCharacters]);

  return (
    <div className="editor-container">
      <h2>What is making you happy right now?</h2>
      <textarea
        type="text"
        className="comment-box"
        placeholder="Share your heart and warm others with your glow"
        onChange={(e) => setTotalCharacters(e.target.value.length)}
      />
      <div className="postInfo">
        <p
          className="messageTooLong"
          style={{ display: exceedLimit ? "flex" : "none" }}
        >
          Your message is too long 😔
        </p>
        <p
          className="charCount"
          style={{ color: exceedLimit ? "red" : "grey" }}
        >
          {totalCharacters}/140
        </p>
      </div>
    </div>
  );
};
