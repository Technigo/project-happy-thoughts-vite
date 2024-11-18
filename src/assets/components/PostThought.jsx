//Child-component that contains the input field and submit button for users to type in their happy thoughts and submit them.
import { useState } from 'react'
import "./PostThought.css";

export const PostThought = ({ postHappyThought }) => {
const [thought, setThought] = useState("")
const [errorMessage, setErrorMessage] = useState("")

// handles the submit of the thought
const handleSubmit = () => {
  // Check for minimum character count
  if (thought.length < 5) {
    setErrorMessage("Min 5 characters");
    return;
  }
  // Check for maximum character count
  else if (thought.length > 140) {
    setErrorMessage("Max 140 characters");
    return;
  }

  postHappyThought(thought);
  setThought("");
  setErrorMessage("");
};

return (
  <div className="post-container">
    <div className="question-container">
      <h1>What´s making you happy right now?</h1>
    </div>
    <div className="input-container">
      <input
        type="text"
        placeholder="Im happy because..."
        value={thought}
        onChange={(event) => setThought(event.target.value)}
      />
    </div>
    <div className='button-error-container'>
      <button onClick={handleSubmit}>❤️ Send Happy Thought ❤️</button>
      <p>{errorMessage}</p>
      <p>{thought.length}/140</p>
    </div>
  </div>
);
};