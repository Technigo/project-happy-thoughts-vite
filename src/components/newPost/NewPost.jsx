import { useState } from "react";
import PropTypes from "prop-types";
import "./NewPost.css";

const NewPost = ({ onSubmit }) => {
  const [newThought, setNewThought] = useState("");
  const [charCount, setCharCount] = useState(0);

  const handleChange = (e) => {
    const text = e.target.value;
    setNewThought(text);
    setCharCount(text.length);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(newThought);
    setNewThought("");
  };

  return (
    <div className="newPostContainer">
      <form onSubmit={handleSubmit} className="newPostForm">
        <label>
          Whats making you happy right now?
          <input
            type="text"
            value={newThought}
            onChange={handleChange}
            placeholder="Enter your new happy thought..."
            className={`newPostInput ${charCount > 140 ? "exceededLimit" : ""}`}
          />
        </label>
        <div className={`charCount ${charCount > 140 ? "exceededLimit" : ""}`}>
          {charCount}/140
        </div>
        <button type="submit" className="newPostButton">
          ❤️ Send Happy Thought ❤️
        </button>
      </form>
    </div>
  );
};

NewPost.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default NewPost;
