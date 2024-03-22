import { useState } from "react"
import PropTypes from "prop-types"

import HeartPink from "../assets/heart-pink.png"
import HeartOutline from "../assets/heart-outline.png"

export const PostMessage = ({showNewPost}) => {
  const [message, setMessage] = useState("")
  const disableSubmit = message.length < 5 || message.length > 140

  //Post a new thought when submit-button is pressed
  const postThought = () => {
    fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts", {
      method: "POST",
      body: JSON.stringify({
        message: message,
      }),
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => response.json())
    .then((json) => {
      console.log(json)
      showNewPost(json)
    })
    .finally(setMessage(""))
  }

  //Handles functions for the submit-button
  const handlePostSubmit = (event) => {
    event.preventDefault()
    postThought()
  }

  return (
    <div className="post-form">
      <form onSubmit={handlePostSubmit}>
        <label className="input-field">
          {" "}
          What makes you happy?
          <input
            className="text-field"
            type="text"
            onChange={(event) => {
              setMessage(event.target.value);
            }}
            value={message}
            placeholder="Write here"
            required
          />
        </label>
        <p
          className={
            disableSubmit ? "characters-count red-text" : "characters-count"
          }
        >
          Characters left: {140 - message.length}
        </p>
        <button className="post-button" type="submit" disabled={disableSubmit}>
          <img
            src={disableSubmit ? HeartOutline : HeartPink}
            alt="Icon of a heart"
            className="heart post-heart"
          />
          Send happy thought
          <img
            src={disableSubmit ? HeartOutline : HeartPink}
            alt="Icon of a heart"
            className="heart post-heart"
          />
        </button>
      </form>
    </div>
  );
}

PostMessage.propTypes = {
  showNewPost: PropTypes.func,
}