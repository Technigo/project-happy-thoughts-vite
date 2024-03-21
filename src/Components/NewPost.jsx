import { useState } from "react";
import PropTypes from "prop-types";
import "./NewPost.css";

const NewPost = ({ onSubmit }) => {
  const [newThought, setNewThought] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(newThought);
    setNewThought("");
  };

  return (
    <div className="newPostContainer">
      <form onSubmit={handleSubmit} className="newPostForm">
        <input
          type="text"
          value={newThought}
          onChange={(e) => setNewThought(e.target.value)}
          placeholder="Enter your new happy thought..."
          className="newPostInput"
        />
        <button type="submit" className="newPostButton">
          Post
        </button>
      </form>
    </div>
  );
};

NewPost.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default NewPost;
