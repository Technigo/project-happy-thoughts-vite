import { useState, useEffect } from "react"
import PropTypes from "prop-types";

export const PostMessage = ({showNewPost}) => {
  const [submit, setSubmit] = useState(false);
  const [message, setMessage] = useState("");
  const disableSubmit = message.length < 5 || message.length > 140;

  //Post a new thought when submit-state is changed
  useEffect (() => {
    fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts", {
      method: "POST",
      body: JSON.stringify({
        message: message,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((json) => {
        showNewPost(json)
      });
  }, [submit]
  )

  //Change submit-state when submit
  const handlePostSubmit = (event) => {
    event.preventDefault();
    setSubmit(!submit)
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
            onChange={(event) => {setMessage(event.target.value)}}
            value={message}
            placeholder="Write here"
            required
          />
        </label>
        <button className="post-button" type="submit" disabled={disableSubmit}>
          Post
        </button>
        <p>{message.length}</p>
      </form>
    </div>
  );
}

PostMessage.propTypes = {
  showNewPost: PropTypes.func,
};