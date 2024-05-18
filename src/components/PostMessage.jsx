import { useState } from "react"
import PropTypes from "prop-types"

import HeartRed from "../assets/heart-red.png"
import HeartOutline from "../assets/heart-outline.png"

export const PostMessage = ({showNewPost}) => {
  const [message, setMessage] = useState("")
  const disableSubmit = message.length < 5 || message.length > 140

  //Post a new thought when submit-button is pressed
  const postThought = () => {
    fetch("https://tejpex-happy-thoughts-api.onrender.com/thoughts", {
      method: "POST",
      body: JSON.stringify({
        message: message,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json.response)
        showNewPost(json.response);
      })
      .finally(setMessage(""));
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
          {"What's making you happy right now?"}
          <textarea
            className="text-field"
            onChange={(event) => {
              setMessage(event.target.value)
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
        <button className={disableSubmit ? "post-button" : "post-button medium-pink-button"} type="submit" disabled={disableSubmit}>
          <img
            src={disableSubmit ? HeartOutline : HeartRed}
            alt="Icon of a heart"
            className="heart post-heart"
          />
          Send Happy Thought
          <img
            src={disableSubmit ? HeartOutline : HeartRed}
            alt="Icon of a heart"
            className="heart post-heart"
          />
        </button>
      </form>
    </div>
  )
}

PostMessage.propTypes = {
  showNewPost: PropTypes.func,
}