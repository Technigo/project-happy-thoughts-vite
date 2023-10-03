import "./writeapost.css";
import { useState } from "react";

export const WriteAPost = () => {
  const [totalCharacters, setTotalCharacters] = useState(0);

  return (
    <div className="editor-container">
      <h2>What is making you happy right now?</h2>
      <textarea
        type="text"
        className="comment-box"
        placeholder="Share your heart and warm others with your glow"
        onChange={(e) => setTotalCharacters(e.target.value.length)}
      />
      <p className="charCount">{totalCharacters}/140</p>
    </div>
  );
};
