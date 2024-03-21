import { useState } from "react"
import PropTypes from "prop-types"

import HeartRed from "../assets/heart-red.png";

export const PostMessage = ({showNewPost}) => {
  //const [submit, setSubmit] = useState(false);
  const [message, setMessage] = useState("");
  const disableSubmit = message.length < 5 || message.length > 140;

  //Post a new thought when submit-state is changed
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
      });
  }

  //Change submit-state when form is submitted
  const handlePostSubmit = (event) => {
    event.preventDefault()
    //setSubmit(!submit)
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
        <p className="characters-count">
          Characters left: {140 - message.length}
        </p>
        <button className="post-button" type="submit" disabled={disableSubmit}>
          <img src={HeartRed} alt="Icon of a heart" className="heart" />
          Send happy thought
          <img src={HeartRed} alt="Icon of a heart" className="heart" />
        </button>
      </form>
    </div>
  );
}

PostMessage.propTypes = {
  showNewPost: PropTypes.func,
}