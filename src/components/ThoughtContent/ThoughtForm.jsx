/**
 * 1. Add template and styling ✅
 * 2. Import makePostRequest function and post a request to the server ✅
 * 3. Handle validation errors ✅
 * 4. Check that the characters are more than 5 and less than 140. ✅
 * 5. Make 0 / 140 count up while typing ✅
 * 6. Change the color of 1 / 140 if more than 140 characters ✅
 */
import { useState } from "react";
import { makePostRequest } from "../Api";
import "./ThoughtForm.scss";

export const ThoughtForm = () => {
  const [message, setMessage] = useState("");
  //   const [messageList, setMessageList] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const charMinLimit = 5;
  const charMaxLimit = 140;

  // Need to handle about of characters before hitting submit
  const handleInputChange = (e) => {
    // Grab the input value an add it to setMessage
    const inputValue = e.target.value;
    setMessage(inputValue);

    if (inputValue.length >= charMaxLimit) {
      setErrorMessage("Your message is too long 😔");
    } else {
      setErrorMessage("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Handle form validation
    const validStringRegex = /^[A-Za-z0-9\s!.,?'"]*$/;

    if (!validStringRegex.test(message)) {
      setErrorMessage("The string contains invalid characters");
    } else if (message.length < charMinLimit) {
      setErrorMessage(
        "Your message is too short, it needs at least 5 letters 😔"
      );
    } else if (message.length >= charMaxLimit) {
      setErrorMessage("Your message is too long 😔");
    } else {
      // Handle form submission and wait for the response
      makePostRequest(message);
      //   const newMessage = await makePostRequest(message);

      //   if (newMessage) {
      //     // Update the origin message list with the new message
      //     setMessageList([newMessage, ...messageList]);
      //     // Clear the input field
      //     setMessage("");
      //   }
      setMessage("");
      setErrorMessage("");
    }
  };

  return (
    <div className="post-wrapper">
      <h2>What is making you happy right now?</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <textarea
            name="message"
            rows={3}
            placeholder="'If music be the food of love, play on.' – William Shakespeare"
            width={454}
            height={76}
            required={true}
            value={message}
            onChange={handleInputChange}
          />
        </label>
        <div className="post-length">
          <p className="error">{errorMessage}</p>
          <p
            className={`length ${message.length > charMaxLimit ? "red" : ""} `}
          >
            {message.length} / 140
          </p>
        </div>
        <button
          id="submitPostBtn"
          type="submit"
          aria-label="button for submitting your post"
        >
          <span className="emoji" aria-label="heart emoji">
            ❤️
          </span>
          Send Happy Thought
          <span className="emoji" aria-label="heart emoji">
            ❤️
          </span>
        </button>
      </form>
    </div>
  );
};
